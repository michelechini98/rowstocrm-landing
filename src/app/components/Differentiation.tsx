import { useLanguage } from '../../i18n/useLanguage';

export function Differentiation() {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.comparison.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.comparison.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="min-w-0 rounded-xl border-2 border-gray-200 bg-white p-5 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.comparison.genericTitle}</h3>
            <div className="relative mb-6 grid gap-2 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-4 sm:min-h-56 sm:block sm:p-5" aria-label={t.comparison.genericDiagramAria}>
              <div className="relative rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 sm:absolute sm:left-8 sm:top-8">{t.comparison.genericNodes[0]}</div>
              <div className="relative rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 sm:absolute sm:right-8 sm:top-10">{t.comparison.genericNodes[1]}</div>
              <div className="relative rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 sm:absolute sm:left-20 sm:top-28">{t.comparison.genericNodes[2]}</div>
              <div className="relative rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 sm:absolute sm:right-20 sm:top-28">{t.comparison.genericNodes[3]}</div>
              <div className="relative rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 sm:absolute sm:bottom-8 sm:left-12">{t.comparison.genericNodes[4]}</div>
              <div className="relative rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 sm:absolute sm:bottom-8 sm:right-10">{t.comparison.genericNodes[5]}</div>
              <svg className="absolute inset-0 hidden h-full w-full text-slate-300 sm:block" aria-hidden="true">
                <path d="M108 50 C170 20, 250 20, 342 54" fill="none" stroke="currentColor" strokeDasharray="4 5" strokeWidth="2" />
                <path d="M116 50 C132 98, 132 116, 166 138" fill="none" stroke="currentColor" strokeDasharray="4 5" strokeWidth="2" />
                <path d="M214 138 C250 98, 286 98, 328 138" fill="none" stroke="currentColor" strokeDasharray="4 5" strokeWidth="2" />
                <path d="M172 156 C136 180, 120 194, 94 206" fill="none" stroke="currentColor" strokeDasharray="4 5" strokeWidth="2" />
                <path d="M344 154 C356 180, 356 194, 334 206" fill="none" stroke="currentColor" strokeDasharray="4 5" strokeWidth="2" />
              </svg>
            </div>
            <ul className="space-y-3 text-gray-600">
              {t.comparison.genericBullets.map((item) => (
                <li className="flex gap-2" key={item}>
                  <span className="text-gray-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 rounded-xl border-2 border-emerald-600 bg-emerald-50 p-5 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.comparison.rowsTitle}</h3>
            <div className="mb-6 rounded-lg border border-emerald-200 bg-white p-5" aria-label={t.comparison.rowsDiagramAria}>
              <div className="grid gap-3">
                {t.comparison.rowsNodes.map((step, index) => (
                  <div className="flex min-w-0 items-center gap-3" key={step}>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#446362] text-sm font-bold text-white">{index + 1}</div>
                    <div className="min-w-0 flex-1 rounded-md border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm font-semibold text-slate-800">{step}</div>
                  </div>
                ))}
              </div>
            </div>
            <ul className="space-y-3 text-gray-700">
              {t.comparison.rowsBullets.map((item) => (
                <li className="flex gap-2" key={item}>
                  <span className="text-emerald-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-4xl rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-center text-sm leading-relaxed text-slate-700">
          {t.comparison.note}
        </p>
      </div>
    </section>
  );
}
