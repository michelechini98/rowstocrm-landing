import { useLanguage } from '../../i18n/useLanguage';

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
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
              <div key={index} className="relative flex min-w-0 items-start gap-4 sm:gap-6">
                <div className="z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white shadow-lg sm:h-16 sm:w-16 sm:text-xl">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white p-5 shadow-md sm:p-6">
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
