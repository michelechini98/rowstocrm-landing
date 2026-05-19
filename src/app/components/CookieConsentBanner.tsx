import { useEffect, useRef, useState } from 'react';
import { getStoredConsent, initializeStoredConsent, saveConsentChoice } from '../lib/consent';

type CookiePreferences = {
  analytics: boolean;
  marketing: boolean;
};

const preferenceDefaults: CookiePreferences = {
  analytics: false,
  marketing: false,
};

function getInitialPreferences(): CookiePreferences {
  const storedConsent = getStoredConsent();

  if (!storedConsent) return preferenceDefaults;

  return {
    analytics: storedConsent.analytics,
    marketing: storedConsent.marketing,
  };
}

export function CookieConsentBanner() {
  const [hasStoredChoice, setHasStoredChoice] = useState(() => Boolean(getStoredConsent()));
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(() => getInitialPreferences());
  const preferencesTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const storedConsent = initializeStoredConsent();
    if (storedConsent) {
      setHasStoredChoice(true);
      setPreferences({
        analytics: storedConsent.analytics,
        marketing: storedConsent.marketing,
      });
    }
  }, []);

  useEffect(() => {
    function openPreferences() {
      setPreferences(getInitialPreferences());
      setIsPreferencesOpen(true);
    }

    window.addEventListener('rowstocrm:open-cookie-preferences', openPreferences);
    return () => window.removeEventListener('rowstocrm:open-cookie-preferences', openPreferences);
  }, []);

  useEffect(() => {
    if (!isPreferencesOpen) return;

    preferencesTitleRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsPreferencesOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPreferencesOpen]);

  function saveChoice(choice: CookiePreferences) {
    const savedChoice = saveConsentChoice(choice);
    setPreferences({
      analytics: savedChoice.analytics,
      marketing: savedChoice.marketing,
    });
    setHasStoredChoice(true);
    setIsPreferencesOpen(false);
  }

  const showInitialBanner = !hasStoredChoice && !isPreferencesOpen;

  return (
    <>
      {showInitialBanner ? (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:px-6 sm:pb-6"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-slate-950">Cookie choices</h2>
              <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                We use cookies and similar technologies to understand how visitors use RowsToCRM and improve our marketing.
                You can accept all, reject non-essential cookies, or customize your choices.
              </p>
            </div>

            <div className="grid w-full gap-2 sm:w-auto sm:min-w-[430px] sm:grid-cols-3">
              <button
                className="min-h-11 rounded-lg bg-[#446362] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#365251] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#446362] focus-visible:ring-offset-2"
                type="button"
                onClick={() => saveChoice({ analytics: true, marketing: true })}
              >
                Accept all
              </button>
              <button
                className="min-h-11 rounded-lg border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-[#446362] transition-colors hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#446362] focus-visible:ring-offset-2"
                type="button"
                onClick={() => saveChoice({ analytics: false, marketing: false })}
              >
                Reject non-essential
              </button>
              <button
                className="min-h-11 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#446362] focus-visible:ring-offset-2"
                type="button"
                onClick={() => setIsPreferencesOpen(true)}
              >
                Customize
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {isPreferencesOpen ? (
        <div
          aria-labelledby="cookie-preferences-title"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end bg-slate-950/35 px-3 py-3 sm:items-center sm:px-6 sm:py-8"
          role="dialog"
        >
          <div className="mx-auto max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-emerald-100 bg-white p-5 shadow-2xl shadow-slate-900/20 sm:p-6">
            <div className="mb-5">
              <h2
                className="text-2xl font-bold text-slate-950"
                id="cookie-preferences-title"
                ref={preferencesTitleRef}
                tabIndex={-1}
              >
                Cookie preferences
              </h2>
              <p className="mt-2 leading-relaxed text-slate-600">
                Manage how RowsToCRM uses optional cookies and similar technologies.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-950">Necessary</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Required for the website to work. These cannot be disabled.
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-[#446362]">Always on</span>
                </div>
              </div>

              <label className="block rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-emerald-200 hover:bg-emerald-50/60">
                <span className="flex items-start gap-4">
                  <input
                    checked={preferences.analytics}
                    className="mt-1 h-5 w-5 rounded border-slate-300 text-[#446362] focus:ring-[#446362]"
                    type="checkbox"
                    onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))}
                  />
                  <span>
                    <span className="block font-semibold text-slate-950">Analytics</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                      Help us understand which pages perform best and which CTAs generate interest.
                    </span>
                  </span>
                </span>
              </label>

              <label className="block rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-emerald-200 hover:bg-emerald-50/60">
                <span className="flex items-start gap-4">
                  <input
                    checked={preferences.marketing}
                    className="mt-1 h-5 w-5 rounded border-slate-300 text-[#446362] focus:ring-[#446362]"
                    type="checkbox"
                    onChange={(event) => setPreferences((current) => ({ ...current, marketing: event.target.checked }))}
                  />
                  <span>
                    <span className="block font-semibold text-slate-950">Marketing</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                      Help us measure campaigns and improve marketing performance.
                    </span>
                  </span>
                </span>
              </label>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              <button
                className="min-h-11 rounded-lg bg-[#446362] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#365251] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#446362] focus-visible:ring-offset-2"
                type="button"
                onClick={() => saveChoice(preferences)}
              >
                Save preferences
              </button>
              <button
                className="min-h-11 rounded-lg border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-[#446362] transition-colors hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#446362] focus-visible:ring-offset-2"
                type="button"
                onClick={() => saveChoice({ analytics: true, marketing: true })}
              >
                Accept all
              </button>
              <button
                className="min-h-11 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#446362] focus-visible:ring-offset-2"
                type="button"
                onClick={() => saveChoice({ analytics: false, marketing: false })}
              >
                Reject non-essential
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
