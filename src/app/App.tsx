import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Differentiation } from './components/Differentiation';
import { HowItWorks } from './components/HowItWorks';
import { KeyCapabilities } from './components/KeyCapabilities';
import { BeforeAfterTracking, MappingCanvas, RowJourney } from './components/ProductNarrative';
import { WhoItsFor } from './components/WhoItsFor';
import { SetupPackage } from './components/SetupPackage';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CookiePolicy } from './components/CookiePolicy';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Seo } from './components/Seo';
import { TermsAndConditions } from './components/TermsAndConditions';

function LandingPage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <RowJourney />
      <MappingCanvas />
      <Differentiation />
      <HowItWorks />
      <BeforeAfterTracking />
      <KeyCapabilities />
      <WhoItsFor />
      <SetupPackage />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default function App() {
  const pathname = window.location.pathname;
  const isCookiePolicyPage = pathname === '/cookie-policy';
  const isPrivacyPage = pathname === '/privacy';
  const isTermsPage = pathname === '/terms';

  return (
    <div id="top" className="min-h-screen bg-white">
      <Seo />
      <Header />
      {isTermsPage ? <TermsAndConditions /> : isPrivacyPage ? <PrivacyPolicy /> : isCookiePolicyPage ? <CookiePolicy /> : <LandingPage />}
      <Footer />
    </div>
  );
}
