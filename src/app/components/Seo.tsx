import { useEffect } from 'react';
import { ogImageUrl, siteUrl } from '../../config/links';
import { useLanguage } from '../../i18n/useLanguage';
import { getSeoLandingPageByPath, normalizePathname } from '../seoLandingPages';

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.content = content;
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    if (hreflang) element.hreflang = hreflang;
    document.head.appendChild(element);
  }

  element.href = href;
}

function setJsonLd(id: string, data: object | null) {
  let element = document.head.querySelector<HTMLScriptElement>(`script[data-schema-id="${id}"]`);

  if (!data) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.schemaId = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function faqSchema(items: ReadonlyArray<readonly [string, string]>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function Seo() {
  const { language, t } = useLanguage();

  useEffect(() => {
    const pathname = normalizePathname(window.location.pathname);
    const isCookiePolicyPage = pathname === '/cookie-policy';
    const isHomePage = pathname === '/';
    const isPrivacyPage = pathname === '/privacy';
    const isTermsPage = pathname === '/terms';
    const seoLandingPage = getSeoLandingPageByPath(pathname);
    const seoLandingPageMeta = seoLandingPage?.[language];
    const isNotFoundPage = !isHomePage && !isPrivacyPage && !isTermsPage && !isCookiePolicyPage && !seoLandingPage;
    const pagePath = isPrivacyPage
      ? '/privacy'
      : isTermsPage
        ? '/terms'
        : isCookiePolicyPage
          ? '/cookie-policy'
          : seoLandingPage?.en.path || (isNotFoundPage ? pathname : '');
    const title = isNotFoundPage
      ? 'Page not found | RowsToCRM'
      : isPrivacyPage
      ? 'Informativa Privacy | RowsToCRM'
      : isTermsPage
        ? 'Termini e Condizioni | RowsToCRM'
        : isCookiePolicyPage
          ? 'Cookie Policy | RowsToCRM'
          : seoLandingPageMeta
            ? seoLandingPageMeta.title
          : t.seo.title;
    const description = isNotFoundPage
      ? 'The requested RowsToCRM page could not be found. Return to the homepage or book a setup review for your Google Sheets to Brevo workflow.'
      : isPrivacyPage
      ? 'Informativa Privacy di RowsToCRM: dati trattati, finalità, basi giuridiche, cookie, fornitori, conservazione e diritti degli utenti.'
      : isTermsPage
        ? 'Termini e Condizioni di RowsToCRM: utilizzo del sito, demo, setup, responsabilità utente, servizi terzi, pagamenti, limitazioni e contatti.'
        : isCookiePolicyPage
          ? 'Cookie Policy di RowsToCRM: uso di cookie tecnici e local storage per funzionalità essenziali e preferenza lingua.'
          : seoLandingPageMeta
            ? seoLandingPageMeta.description
          : t.seo.description;
    const canonicalUrl = `${siteUrl}${pagePath}`;

    document.title = title;
    setMeta('description', description);
    setMeta('robots', isNotFoundPage ? 'noindex, follow' : 'index, follow');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:image', ogImageUrl, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImageUrl);
    setLink('canonical', canonicalUrl);
    setLink('alternate', `${siteUrl}${pagePath || '/'}`, 'en');
    setLink('alternate', `${siteUrl}${pagePath || '/'}?lang=it`, 'it');
    setLink('alternate', `${siteUrl}${pagePath || '/'}`, 'x-default');
    setJsonLd('organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'RowsToCRM',
      url: siteUrl,
      logo: ogImageUrl,
      description:
        'RowsToCRM helps Brevo users create or update contacts from structured Google Sheets rows and link those contacts to companies automatically.',
    });
    setJsonLd('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'RowsToCRM',
      url: siteUrl,
      inLanguage: 'en',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    });
    setJsonLd('software-application', isNotFoundPage ? null : {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#software`,
      name: 'RowsToCRM',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: canonicalUrl,
      description,
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      featureList: [
        'Map Google Sheets columns to Brevo contact and company fields',
        'Create or update Brevo contacts from Google Sheets',
        'Link Brevo contacts to companies automatically',
        'Assign Brevo lists from mapped Sheet columns',
        'Write row-level sync status back to Google Sheets',
      ],
    });
    setJsonLd('faq', isHomePage ? faqSchema(t.faq.items) : seoLandingPageMeta ? faqSchema(seoLandingPageMeta.faq) : null);
    setJsonLd('breadcrumb', seoLandingPageMeta ? {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'RowsToCRM',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: seoLandingPageMeta.h1,
          item: canonicalUrl,
        },
      ],
    } : null);
    document.documentElement.lang = language;
  }, [language, t]);

  return null;
}
