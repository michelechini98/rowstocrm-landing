import { useEffect } from 'react';
import { ogImageUrl, siteUrl } from '../../config/links';
import { useLanguage } from '../../i18n/useLanguage';

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

export function Seo() {
  const { language, t } = useLanguage();

  useEffect(() => {
    const pathname = window.location.pathname;
    const isCookiePolicyPage = pathname === '/cookie-policy';
    const isPrivacyPage = pathname === '/privacy';
    const isTermsPage = pathname === '/terms';
    const legalPath = isPrivacyPage ? '/privacy' : isTermsPage ? '/terms' : isCookiePolicyPage ? '/cookie-policy' : '';
    const title = isPrivacyPage
      ? 'Informativa Privacy | RowsToCRM'
      : isTermsPage
        ? 'Termini e Condizioni | RowsToCRM'
        : isCookiePolicyPage
          ? 'Cookie Policy | RowsToCRM'
          : t.seo.title;
    const description = isPrivacyPage
      ? 'Informativa Privacy di RowsToCRM: dati trattati, finalità, basi giuridiche, cookie, fornitori, conservazione e diritti degli utenti.'
      : isTermsPage
        ? 'Termini e Condizioni di RowsToCRM: utilizzo del sito, demo, setup, responsabilità utente, servizi terzi, pagamenti, limitazioni e contatti.'
        : isCookiePolicyPage
          ? 'Cookie Policy di RowsToCRM: uso di cookie tecnici e local storage per funzionalità essenziali e preferenza lingua.'
          : t.seo.description;
    const canonicalUrl = `${siteUrl}${legalPath}`;

    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:image', ogImageUrl, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImageUrl);
    setLink('canonical', canonicalUrl);
    setLink('alternate', `${siteUrl}${legalPath || '/'}`, 'en');
    setLink('alternate', `${siteUrl}${legalPath || '/'}${legalPath ? '?lang=it' : '?lang=it'}`, 'it');
    setLink('alternate', `${siteUrl}${legalPath || '/'}`, 'x-default');
    document.documentElement.lang = language;
  }, [language, t]);

  return null;
}
