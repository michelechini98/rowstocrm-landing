import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Differentiation } from './components/Differentiation';
import { HowItWorks } from './components/HowItWorks';
import { KeyCapabilities } from './components/KeyCapabilities';
import { WhoItsFor } from './components/WhoItsFor';
import { SetupPackage } from './components/SetupPackage';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Differentiation />
      <HowItWorks />
      <KeyCapabilities />
      <WhoItsFor />
      <SetupPackage />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}