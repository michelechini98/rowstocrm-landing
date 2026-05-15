import { CheckCircle2, Link2, Play, RefreshCw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import { RowStatus, StatusBadge, StatusLegend } from './ProductStatus';

export function RowJourney() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(-1);
  const [status, setStatus] = useState<RowStatus>('READY');
  const [isRunning, setIsRunning] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => timers.current.forEach(window.clearTimeout);
  }, []);

  const processSampleRow = () => {
    if (isRunning) return;

    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    setIsRunning(true);
    setStatus('PROCESSING');
    setActiveStep(0);

    t.journey.steps.forEach((_, index) => {
      const timer = window.setTimeout(() => {
        setActiveStep(index);
        if (index === t.journey.steps.length - 1) {
          setStatus('DONE');
          setIsRunning(false);
        }
      }, index * 360);
      timers.current.push(timer);
    });
  };

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">{t.journey.title}</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            {t.journey.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{t.journey.sampleRow}</h3>
                <p className="text-sm text-slate-600">{t.journey.demoOnly}</p>
              </div>
              <StatusBadge status={status} />
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-slate-50 text-xs text-slate-500">
                  <tr>
                    <th className="px-3 py-2 font-semibold">{t.mockup.columns.firstName}</th>
                    <th className="px-3 py-2 font-semibold">{t.mockup.columns.company}</th>
                    <th className="px-3 py-2 font-semibold">{t.mockup.columns.email}</th>
                    <th className="px-3 py-2 font-semibold">{t.mockup.mappings[4][0]}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-100">
                    {t.journey.sample.map((cell, index) => (
                      <td className={index === 2 ? 'px-3 py-3 text-slate-500' : 'px-3 py-3'} key={cell}>{cell}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#446362] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#365251] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isRunning}
              onClick={processSampleRow}
              type="button"
            >
              {isRunning ? <RefreshCw className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
              {t.journey.process}
            </button>
          </div>

          <ol className="space-y-3" aria-label={t.journey.processingAria}>
            {t.journey.steps.map((step, index) => {
              const isComplete = activeStep >= index && status === 'DONE';
              const isActive = activeStep === index && status === 'PROCESSING';
              const isReached = activeStep >= index;

              return (
                <li
                  className={`flex items-center gap-4 rounded-xl border p-4 transition-colors ${
                    isReached ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'
                  }`}
                  key={step}
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isReached ? 'bg-[#446362] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isComplete ? <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> : index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-slate-900">{step}</div>
                    <div className="text-sm text-slate-600">
                      {isActive ? t.journey.running : isReached ? t.journey.reached : t.journey.waiting}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function MappingCanvas() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">{t.mappingCanvas.title}</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            {t.mappingCanvas.subtitle}
          </p>
        </div>

        <div className="relative rounded-2xl border border-emerald-100 bg-white p-6 shadow-lg">
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" aria-hidden="true">
            {t.mappingCanvas.rows.map((_, index) => {
              const y = 104 + index * 62;
              return <path d={`M 330 ${y} C 440 ${y}, 520 ${y}, 650 ${y}`} fill="none" key={index} stroke="#446362" strokeOpacity="0.28" strokeWidth="2" />;
            })}
          </svg>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-900">{t.mappingCanvas.left}</h3>
              <div className="space-y-3">
                {t.mappingCanvas.rows.map(([from, , type]) => (
                  <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3" key={from}>
                    <div className="text-sm font-semibold text-slate-900">{from}</div>
                    <div className="text-xs text-slate-500">{type}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-900">{t.mappingCanvas.right}</h3>
              <div className="space-y-3">
                {t.mappingCanvas.rows.map(([from, to, type]) => (
                  <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3" key={`${from}-${to}`}>
                    <div className="text-sm font-semibold text-[#446362]">{to}</div>
                    <div className="text-xs text-slate-600">{type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-slate-700">
            <Link2 className="h-4 w-4 text-[#446362]" aria-hidden="true" />
            {t.mappingCanvas.note}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterTracking() {
  const { t } = useLanguage();
  const beforeColumns = [t.tracking.columns.firstName, t.tracking.columns.company, t.tracking.columns.email, t.tracking.columns.source];
  const afterColumns = [
    ...beforeColumns,
    t.tracking.columns.syncStatus,
    t.tracking.columns.syncError,
    t.tracking.columns.contactId,
    t.tracking.columns.companyId,
    t.tracking.columns.processedAt,
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">{t.tracking.title}</h2>
          <p className="text-lg text-gray-600">
            {t.tracking.subtitle}
          </p>
        </div>

        <div className="mb-8">
          <StatusLegend />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <TrackingTable columns={beforeColumns} title={t.tracking.before} status={t.tracking.beforeStatus} />
          <TrackingTable columns={afterColumns} title={t.tracking.after} status={t.tracking.afterStatus} enriched />
        </div>
      </div>
    </section>
  );
}

function TrackingTable({ columns, enriched, status, title }: { columns: string[]; enriched?: boolean; status: string; title: string }) {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{status}</p>
      </div>
      <div className="overflow-x-auto p-4">
        <table className="w-full min-w-[640px] text-left text-xs">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              {columns.map((column) => (
                <th className="border-b border-slate-200 px-3 py-2 font-semibold" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {t.tracking.sample.map((cell, index) => (
                <td className={index === 2 ? 'border-b border-slate-100 px-3 py-3 text-slate-500' : 'border-b border-slate-100 px-3 py-3'} key={cell}>{cell}</td>
              ))}
              {enriched && (
                <>
                  <td className="border-b border-slate-100 px-3 py-3"><StatusBadge status="DONE" /></td>
                  <td className="border-b border-slate-100 px-3 py-3 text-slate-400">-</td>
                  <td className="border-b border-slate-100 px-3 py-3">ct_1842</td>
                  <td className="border-b border-slate-100 px-3 py-3">co_3381</td>
                  <td className="border-b border-slate-100 px-3 py-3">2026-05-15 12:42</td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
