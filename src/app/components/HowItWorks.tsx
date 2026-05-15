import { useLanguage } from '../../i18n/useLanguage';

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-emerald-200 hidden md:block"></div>

          <div className="space-y-6">
            {t.howItWorks.steps.map(([title, description], index) => (
              <div key={index} className="relative flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
