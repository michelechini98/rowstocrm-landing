export type TrackingEventName =
  | 'page_view_custom'
  | 'hero_cta_click'
  | 'secondary_cta_click'
  | 'seo_page_cta_click'
  | 'demo_booking_click'
  | 'pricing_cta_click'
  | 'footer_cta_click'
  | 'contact_link_click'
  | 'outbound_link_click'
  | 'form_start'
  | 'form_submit_success'
  | 'form_submit_error';

export type PageType = 'home' | 'seo_landing' | 'not_found' | 'other';

type TrackingPayload = {
  page_path?: string;
  page_title?: string;
  page_type?: PageType;
  route_slug?: string;
  cta_location?: string;
  cta_text?: string;
  cta_href?: string;
  timestamp?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

let currentPageType: PageType = 'other';
let lastPageViewKey = '';

function getRouteSlug(pagePath: string) {
  return pagePath === '/' ? 'home' : pagePath.replace(/^\/+|\/+$/g, '') || 'home';
}

function getBasePayload(payload: TrackingPayload = {}): TrackingPayload {
  const pagePath = payload.page_path || window.location.pathname;

  return {
    page_path: pagePath,
    page_title: payload.page_title || document.title,
    page_type: payload.page_type || currentPageType,
    route_slug: payload.route_slug || getRouteSlug(pagePath),
    timestamp: new Date().toISOString(),
    ...payload,
  };
}

function isOutboundHref(href?: string) {
  if (!href || href.startsWith('#') || href.startsWith('/')) return false;

  try {
    const url = new URL(href, window.location.href);
    return url.origin !== window.location.origin || url.protocol === 'mailto:';
  } catch {
    return false;
  }
}

function isBookingHref(href?: string) {
  return Boolean(href && (href.includes('zcal.co/rowstocrm/demo') || href.includes('RowsToCRM%20demo%20request')));
}

export function trackEvent(eventName: TrackingEventName, payload: TrackingPayload = {}) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...getBasePayload(payload),
    });
  } catch {
    // Tracking should never interrupt the user experience if GTM or dataLayer is blocked.
  }
}

export function trackPageView(pageType: PageType, pageTitle: string) {
  const pagePath = window.location.pathname;
  const pageViewKey = `${pagePath}:${pageType}:${pageTitle}`;

  if (pageViewKey === lastPageViewKey) return;

  currentPageType = pageType;
  lastPageViewKey = pageViewKey;
  trackEvent('page_view_custom', {
    page_path: pagePath,
    page_title: pageTitle,
    page_type: pageType,
    route_slug: getRouteSlug(pagePath),
  });
}

export function trackLinkClick(
  eventName: TrackingEventName,
  payload: Pick<TrackingPayload, 'cta_location' | 'cta_text' | 'cta_href'>
) {
  trackEvent(eventName, payload);

  if (isBookingHref(payload.cta_href) && eventName !== 'demo_booking_click') {
    trackEvent('demo_booking_click', payload);
  }

  if (isOutboundHref(payload.cta_href) && eventName !== 'outbound_link_click') {
    trackEvent('outbound_link_click', payload);
  }
}

// TODO: Add a cookie banner/CMP that updates GTM consent before enabling analytics or ad tags that require consent.
