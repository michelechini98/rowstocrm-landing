import { Check } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage';
import { BookingLink } from './BookingLink';

export function SetupPackage() {
  const { t } = useLanguage();

  return (
    <section id="setup-package" className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.setup.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.setup.subtitle}
          </p>
        </div>

        <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-blue-50 p-5 sm:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.setup.included}</h3>
              <ul className="space-y-3">
                {t.setup.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div className="bg-white rounded-xl p-8 shadow-md mb-6">
                <div className="text-sm text-gray-600 mb-2">{t.setup.investment}</div>
                <div className="mb-2 text-4xl font-bold text-gray-900 sm:text-5xl">€690</div>
                <div className="text-gray-600 mb-4">{t.setup.package}</div>
                <div className="text-sm text-gray-500 border-t pt-4">
                  {t.setup.advanced}
                </div>
              </div>

              <BookingLink className="inline-flex w-full items-center justify-center px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition-colors">
                {t.cta.bookDemo}
              </BookingLink>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            {t.setup.custom}
          </p>
        </div>
      </div>
    </section>
  );
}
