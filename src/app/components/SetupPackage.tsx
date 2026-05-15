import { Check } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage';
import { BookingLink } from './BookingLink';

export function SetupPackage() {
  const { t } = useLanguage();

  return (
    <section id="setup-package" className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.setup.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.setup.subtitle}
          </p>
          <p className="mt-4 text-sm font-semibold text-[#446362]">{t.setup.note}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {t.setup.packages.map((pkg, index) => (
            <div
              className={`flex min-w-0 flex-col rounded-2xl border-2 bg-white p-5 shadow-sm sm:p-8 ${
                index === 1 ? 'border-[#446362] shadow-lg' : 'border-emerald-100'
              }`}
              key={pkg.title}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">{pkg.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pkg.label}</p>
                </div>
                {'badge' in pkg && pkg.badge && (
                  <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-[#446362]">
                    {pkg.badge}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-slate-950 sm:text-5xl">{pkg.price}</div>
                <div className="text-sm font-semibold text-slate-500">{pkg.priceNote}</div>
              </div>

              <h4 className="mb-3 font-bold text-slate-900">{pkg.included}</h4>
              <ul className="mb-6 space-y-3">
                {pkg.features.map((item) => (
                  <li className="flex items-start gap-3 text-sm text-slate-700" key={item}>
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {'notIncluded' in pkg && pkg.notIncluded && (
                <p className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed text-slate-600">
                  {pkg.notIncluded}
                </p>
              )}

              <BookingLink className={`mt-auto inline-flex min-h-11 w-full items-center justify-center rounded-lg px-6 py-4 text-center font-semibold transition-colors ${
                index === 1 ? 'bg-[#446362] text-white hover:bg-[#365251]' : 'border-2 border-[#446362] text-[#446362] hover:bg-emerald-50'
              }`}>
                {pkg.cta}
              </BookingLink>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-2 text-center text-sm leading-relaxed text-gray-500">
          {t.setup.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
