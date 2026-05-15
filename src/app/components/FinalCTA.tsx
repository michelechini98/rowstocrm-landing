import { ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage';
import { BookingLink } from './BookingLink';

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-700 to-emerald-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
          <Calendar className="w-8 h-8 text-white" aria-hidden="true" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t.finalCta.title}
        </h2>

        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          {t.finalCta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingLink className="px-8 py-4 bg-white text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors inline-flex items-center gap-2 justify-center">
            <span>{t.cta.primary}</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </BookingLink>
          <a href="#setup-package" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors">
            {t.cta.secondary}
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-600">
          <div className="grid md:grid-cols-3 gap-8 text-emerald-100">
            {t.finalCta.stats.map(([title, description]) => (
              <div key={title}>
                <div className="text-3xl font-bold text-white mb-2">{title}</div>
                <div className="text-sm">{description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
