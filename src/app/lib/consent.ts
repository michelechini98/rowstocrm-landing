export type ConsentChoice = {
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  consent_version: 1;
};

type ConsentStatus = 'granted' | 'denied';

export type GoogleConsentState = {
  analytics_storage: ConsentStatus;
  ad_storage: ConsentStatus;
  ad_user_data: ConsentStatus;
  ad_personalization: ConsentStatus;
  functionality_storage: ConsentStatus;
  security_storage: ConsentStatus;
};

const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = 'rowstocrm_cookie_consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const defaultConsentState: GoogleConsentState = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
};

function consentStateFromChoice(choice: Pick<ConsentChoice, 'analytics' | 'marketing'>): GoogleConsentState {
  return {
    analytics_storage: choice.analytics ? 'granted' : 'denied',
    ad_storage: choice.marketing ? 'granted' : 'denied',
    ad_user_data: choice.marketing ? 'granted' : 'denied',
    ad_personalization: choice.marketing ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  };
}

function ensureConsentTransport() {
  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }
}

export function getStoredConsent(): ConsentChoice | null {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as Partial<ConsentChoice>;
    if (
      parsed.consent_version !== CONSENT_VERSION ||
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.marketing !== 'boolean' ||
      typeof parsed.timestamp !== 'string'
    ) {
      return null;
    }

    return parsed as ConsentChoice;
  } catch {
    return null;
  }
}

export function updateConsentMode(choice: Pick<ConsentChoice, 'analytics' | 'marketing'>) {
  try {
    ensureConsentTransport();
    window.gtag?.('consent', 'update', consentStateFromChoice(choice));
  } catch {
    // Consent updates should never interrupt the user experience if GTM is unavailable.
  }
}

export function saveConsentChoice(choice: Pick<ConsentChoice, 'analytics' | 'marketing'>) {
  const savedChoice: ConsentChoice = {
    analytics: choice.analytics,
    marketing: choice.marketing,
    timestamp: new Date().toISOString(),
    consent_version: CONSENT_VERSION,
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(savedChoice));
  } catch {
    // Consent Mode can still be updated for the current page even if storage is unavailable.
  }

  updateConsentMode(savedChoice);
  return savedChoice;
}

export function initializeStoredConsent() {
  const storedConsent = getStoredConsent();
  if (storedConsent) {
    updateConsentMode(storedConsent);
  }

  return storedConsent;
}
