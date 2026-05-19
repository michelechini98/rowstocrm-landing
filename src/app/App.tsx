import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Differentiation } from './components/Differentiation';
import { HowItWorks } from './components/HowItWorks';
import { KeyCapabilities } from './components/KeyCapabilities';
import { BeforeAfterTracking, MappingCanvas, RowJourney } from './components/ProductNarrative';
import { AfterDemo, CompleteRecords, CtaStrip } from './components/MarketingSections';
import { WhoItsFor } from './components/WhoItsFor';
import { SetupPackage } from './components/SetupPackage';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { CookiePolicy } from './components/CookiePolicy';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Seo } from './components/Seo';
import { SeoLandingPage } from './components/SeoLandingPage';
import { TermsAndConditions } from './components/TermsAndConditions';
import { getSeoLandingPageByPath } from './seoLandingPages';
import { translations } from '../i18n/translations';
import { trackPageView, type PageType } from './lib/tracking';

function LandingPage() {
  return (
    <>
      <Hero />
      <Problem />
      <Differentiation />
      <CtaStrip variant="comparison" />
      <CompleteRecords />
      <RowJourney />
      <CtaStrip variant="journey" />
      <Solution />
      <MappingCanvas />
      <HowItWorks />
      <BeforeAfterTracking />
      <KeyCapabilities />
      <WhoItsFor />
      <AfterDemo />
      <SetupPackage />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default function App() {
  const pathname = window.location.pathname;
  const isCookiePolicyPage = pathname === '/cookie-policy';
  const isHomePage = pathname === '/';
  const isPrivacyPage = pathname === '/privacy';
  const isTermsPage = pathname === '/terms';
  const seoLandingPage = getSeoLandingPageByPath(pathname);
  const isNotFoundPage = !isHomePage && !isTermsPage && !isPrivacyPage && !isCookiePolicyPage && !seoLandingPage;
  const pageType: PageType = isHomePage ? 'home' : seoLandingPage ? 'seo_landing' : isNotFoundPage ? 'not_found' : 'other';
  const pageTitle = isHomePage
    ? translations.en.seo.title
    : isTermsPage
      ? 'Termini e Condizioni | RowsToCRM'
      : isPrivacyPage
        ? 'Informativa Privacy | RowsToCRM'
        : isCookiePolicyPage
          ? 'Cookie Policy | RowsToCRM'
          : seoLandingPage?.en.title || 'Page not found | RowsToCRM';

  useEffect(() => {
    trackPageView(pageType, pageTitle);
  }, [pathname, pageTitle, pageType]);

  return (
    <div id="top" className="min-h-screen bg-white">
      <Seo />
      <Header />
      {isHomePage ? (
        <LandingPage />
      ) : isTermsPage ? (
        <TermsAndConditions />
      ) : isPrivacyPage ? (
        <PrivacyPolicy />
      ) : isCookiePolicyPage ? (
        <CookiePolicy />
      ) : seoLandingPage ? (
        <SeoLandingPage page={seoLandingPage} />
      ) : (
        <NotFound />
      )}
      <Footer />
      <CookieConsentBanner />
    </div>
  );
}
