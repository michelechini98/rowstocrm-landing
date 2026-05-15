import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage';

export function Solution() {
  const { t } = useLanguage();

  return (
    <section id="solution" className="bg-gradient-to-b from-white to-emerald-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.solution.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.solution.subtitle}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {t.solution.steps.map((step, index) => (
                <div className="flex min-w-0 gap-4" key={step.title}>
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex min-w-0 flex-col justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-blue-50 p-5 sm:p-6">
              <div className="space-y-4">
                {t.solution.flow.map((item, index) => (
                  <div key={item}>
                    <div className="flex min-w-0 items-start gap-3">
                      <div className={['bg-emerald-500', 'bg-blue-500', 'bg-purple-500', 'bg-orange-500'][index] + ' w-3 h-3 rounded-full'} aria-hidden="true"></div>
                      <span className="min-w-0 text-gray-700">{item}</span>
                    </div>
                    {index < t.solution.flow.length - 1 && <ArrowRight className="w-5 h-5 text-gray-400 ml-1 mt-4" aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
