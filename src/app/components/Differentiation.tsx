import { useLanguage } from '../../i18n/useLanguage';

export function Differentiation() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t.comparison.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.comparison.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border-2 border-gray-200 rounded-xl bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.comparison.genericTitle}</h3>
            <div className="relative mb-6 min-h-56 rounded-lg border border-slate-200 bg-slate-50 p-5" aria-label={t.comparison.genericDiagramAria}>
              <div className="absolute left-8 top-8 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">{t.comparison.genericNodes[0]}</div>
              <div className="absolute right-8 top-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">{t.comparison.genericNodes[1]}</div>
              <div className="absolute left-20 top-28 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">{t.comparison.genericNodes[2]}</div>
              <div className="absolute right-20 top-28 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">{t.comparison.genericNodes[3]}</div>
              <div className="absolute bottom-8 left-12 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">{t.comparison.genericNodes[4]}</div>
              <div className="absolute bottom-8 right-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">{t.comparison.genericNodes[5]}</div>
              <svg className="absolute inset-0 h-full w-full text-slate-300" aria-hidden="true">
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

          <div className="p-8 border-2 border-emerald-600 rounded-xl bg-emerald-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.comparison.rowsTitle}</h3>
            <div className="mb-6 rounded-lg border border-emerald-200 bg-white p-5" aria-label={t.comparison.rowsDiagramAria}>
              <div className="grid gap-3">
                {t.comparison.rowsNodes.map((step, index) => (
                  <div className="flex items-center gap-3" key={step}>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#446362] text-sm font-bold text-white">{index + 1}</div>
                    <div className="flex-1 rounded-md border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm font-semibold text-slate-800">{step}</div>
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
      </div>
    </section>
  );
}
