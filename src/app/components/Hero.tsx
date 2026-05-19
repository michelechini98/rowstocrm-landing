import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage';
import { BookingLink } from './BookingLink';
import { InteractiveProductMockup } from './InteractiveProductMockup';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full mb-6">
              {t.hero.eyebrow}
            </div>

            <h1 className="mb-6 text-[clamp(2.25rem,11vw,3rem)] font-bold leading-tight text-gray-900 sm:text-5xl">
              {t.hero.title}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <BookingLink className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-emerald-700 px-6 py-4 text-center text-white transition-colors hover:bg-emerald-800 sm:w-auto sm:px-8">
                {t.cta.primary}
              </BookingLink>
              <a href="#how-it-works" className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border-2 border-emerald-700 px-6 py-4 text-center text-emerald-700 transition-colors hover:bg-emerald-50 sm:w-auto sm:px-8">
                {t.cta.secondary}
              </a>
            </div>

            <div className="space-y-3">
              {t.hero.bullets.map((bullet) => (
                <div className="flex items-center gap-3 text-gray-700" key={bullet}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-500">
              {t.hero.microcopy}
            </p>
          </div>

          <div className="relative min-w-0">
            <InteractiveProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
