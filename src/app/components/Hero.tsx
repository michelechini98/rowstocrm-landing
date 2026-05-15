import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage';
import { BookingLink } from './BookingLink';
import { InteractiveProductMockup } from './InteractiveProductMockup';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full mb-6">
              {t.hero.eyebrow}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <BookingLink className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition-colors">
                {t.cta.primary}
              </BookingLink>
              <a href="#setup-package" className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
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
          </div>

          <div className="relative">
            <InteractiveProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
