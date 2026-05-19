import { ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage';
import { trackEvent } from '../lib/tracking';
import { BookingLink } from './BookingLink';

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
          <Calendar className="w-8 h-8 text-white" aria-hidden="true" />
        </div>

        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {t.finalCta.title}
        </h2>

        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          {t.finalCta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingLink
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-emerald-700 transition-colors hover:bg-emerald-50 sm:w-auto sm:px-8"
            ctaLocation="final_cta_primary"
          >
            <span>{t.cta.primary}</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </BookingLink>
          <a
            href="#how-it-works"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border-2 border-white px-6 py-4 text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-8"
            onClick={() =>
              trackEvent('secondary_cta_click', {
                cta_href: '#how-it-works',
                cta_location: 'final_cta_secondary',
                cta_text: t.cta.secondary,
              })
            }
          >
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
