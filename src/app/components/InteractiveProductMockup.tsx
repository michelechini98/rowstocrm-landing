import { Activity, CheckCircle2, Database, RefreshCw, Settings, ShieldCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import { RowStatus, StatusBadge } from './ProductStatus';

type MockupTab = 'Home' | 'Mapping' | 'Health' | 'Settings';

const tabs: MockupTab[] = ['Home', 'Mapping', 'Health', 'Settings'];

const initialStatuses: RowStatus[] = ['DONE', 'READY', 'ERROR', 'SKIPPED'];

function ReadinessItem({ children }: { children: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-slate-700">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#446362]" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export function InteractiveProductMockup() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<MockupTab>('Home');
  const [rowStatuses, setRowStatuses] = useState(initialStatuses);
  const [messageKey, setMessageKey] = useState<'readyMessage' | 'processingMessage' | 'processedMessage'>('readyMessage');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResultBadges, setShowResultBadges] = useState(true);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach(window.clearTimeout);
    };
  }, []);

  const processReadyRows = () => {
    if (isProcessing) return;

    setActiveTab('Home');
    setIsProcessing(true);
    setShowResultBadges(false);
    setMessageKey('processingMessage');
    setRowStatuses((currentRows) => currentRows.map((status) => (status === 'READY' ? 'PROCESSING' : status)));

    const timer = window.setTimeout(() => {
      setRowStatuses((currentRows) => currentRows.map((status) => (status === 'PROCESSING' ? 'DONE' : status)));
      setMessageKey('processedMessage');
      setShowResultBadges(true);
      setIsProcessing(false);
    }, 900);

    timers.current.push(timer);
  };

  const doneCount = rowStatuses.filter((status) => status === 'DONE').length;
  const readyCount = rowStatuses.filter((status) => status === 'READY').length;
  const errorCount = rowStatuses.filter((status) => status === 'ERROR').length;
  const skippedCount = rowStatuses.filter((status) => status === 'SKIPPED').length;

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-100 px-3 py-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-green-400" aria-hidden="true" />
          <span className="ml-1 truncate text-sm font-medium text-slate-600 sm:ml-3">{t.mockup.googleSheets}</span>
        </div>
        <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#446362] shadow-sm">{t.mockup.demoPreview}</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 sm:gap-4 sm:px-4">
        <span className="font-semibold text-[#446362]">{t.mockup.leadIntakeSheet}</span>
        <span aria-hidden="true">+</span>
        <span>{t.mockup.sidebarOpen}</span>
      </div>

      <div className="grid min-w-0 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0 bg-white">
          <div className="flex min-w-0 items-center gap-2 overflow-hidden border-b border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 sm:px-4">
            <span className="rounded bg-white px-2 py-1 shadow-sm">A</span>
            <span className="rounded bg-white px-2 py-1 shadow-sm">B</span>
            <span className="rounded bg-white px-2 py-1 shadow-sm">C</span>
            <span className="rounded bg-white px-2 py-1 shadow-sm">D</span>
            <span className="rounded bg-white px-2 py-1 shadow-sm">E</span>
            <span className="ml-auto hidden truncate text-[#446362] sm:block">{t.mockup.syncTrackingVisible}</span>
          </div>

          <div className="max-w-full overflow-x-auto p-3 sm:p-4">
            <table className="w-full min-w-[460px] border-collapse text-left text-xs sm:min-w-[560px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="px-3 py-2 font-semibold">{t.mockup.columns.firstName}</th>
                  <th className="px-3 py-2 font-semibold">{t.mockup.columns.company}</th>
                  <th className="px-3 py-2 font-semibold">{t.mockup.columns.email}</th>
                  <th className="px-3 py-2 font-semibold">{t.mockup.columns.source}</th>
                  <th className="px-3 py-2 font-semibold">{t.mockup.columns.syncStatus}</th>
                </tr>
              </thead>
              <tbody>
                {t.mockup.rows.map(([firstName, company, email, source], index) => (
                  <tr
                    key={email}
                    className={`border-b border-slate-100 transition-colors ${
                      index === 1 ? 'bg-emerald-50/80 outline outline-1 outline-emerald-200' : ''
                    }`}
                  >
                    <td className="px-3 py-3 text-slate-800">{firstName}</td>
                    <td className="px-3 py-3 text-slate-700">{company}</td>
                    <td className="px-3 py-3 text-slate-500">{email}</td>
                    <td className="px-3 py-3 text-slate-600">{source}</td>
                    <td className="px-3 py-3">
                      <StatusBadge status={rowStatuses[index]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50/70 p-3">
              <div className="mb-2 text-xs font-semibold text-[#446362]">{t.mockup.selectedRowJourney}</div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <StatusBadge status="READY" />
                <span aria-hidden="true">-&gt;</span>
                <StatusBadge status={isProcessing ? 'PROCESSING' : 'PROCESSING'} />
                <span aria-hidden="true">-&gt;</span>
                <StatusBadge status="DONE" />
              </div>
            </div>
          </div>
        </div>

        <aside className="min-w-0 border-t border-slate-200 bg-slate-50 p-3 sm:p-4 lg:border-l lg:border-t-0">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">{t.mockup.title}</h2>
              <ShieldCheck className="h-5 w-5 text-[#446362]" aria-hidden="true" />
            </div>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.mockup.subtitle}</p>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4" role="tablist" aria-label={t.mockup.tablistAria}>
            {tabs.map((tab, index) => (
              <button
                aria-label={t.mockup.tabAria[tab.toLowerCase() as Lowercase<MockupTab>]}
                aria-selected={activeTab === tab}
                className={`min-h-11 rounded-md border px-2 py-2 text-xs font-semibold transition-colors ${
                  activeTab === tab
                    ? 'border-[#446362] bg-[#446362] text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-[#446362]/50'
                }`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="tab"
                type="button"
              >
                {t.mockup.tabs[index]}
              </button>
            ))}
          </div>

          <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            {activeTab === 'Home' && (
              <div className="space-y-3" role="tabpanel">
                {t.mockup.readiness.map((item) => (
                  <ReadinessItem key={item}>{item}</ReadinessItem>
                ))}
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{t.mockup.lastRowResult}</div>
                  <div className="flex flex-wrap gap-2">
                    {showResultBadges ? (
                      t.mockup.resultBadges.map((badge) => (
                        <span className="rounded-full border border-emerald-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-[#446362]" key={badge}>
                          {badge}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-500">{t.mockup.waiting}</span>
                    )}
                  </div>
                </div>
                <button
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#446362] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#365251] disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={isProcessing}
                  onClick={processReadyRows}
                  type="button"
                >
                  <RefreshCw className={`h-4 w-4 ${isProcessing ? 'animate-spin' : ''}`} aria-hidden="true" />
                  {t.mockup.processReadyRows}
                </button>
                <p className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600" aria-live="polite">
                  {t.mockup[messageKey]}
                </p>
              </div>
            )}

            {activeTab === 'Mapping' && (
              <div className="space-y-3" role="tabpanel">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Database className="h-4 w-4 text-[#446362]" aria-hidden="true" />
                  {t.mockup.savedMappings}
                </div>
                <div className="rounded-md border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-semibold text-[#446362]">
                  {t.mockup.mappingLoaded}
                </div>
                <div className="space-y-2">
                  {t.mockup.mappings.map(([from, to]) => (
                    <div className="grid gap-1 rounded-md border border-slate-100 bg-slate-50 px-3 py-2 text-xs sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-3" key={from}>
                      <span className="font-semibold text-slate-700">{from}</span>
                      <span className="hidden text-slate-400 sm:inline" aria-hidden="true">-&gt;</span>
                      <span className="text-slate-600 sm:text-right">{to}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Health' && (
              <div className="space-y-3" role="tabpanel">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Activity className="h-4 w-4 text-[#446362]" aria-hidden="true" />
                  {t.mockup.syncHealth}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    ['DONE', doneCount],
                    ['READY', readyCount],
                    ['ERROR', errorCount],
                    ['SKIPPED', skippedCount],
                  ].map(([label, value]) => (
                    <div className="rounded-md border border-slate-100 bg-slate-50 p-3" key={label}>
                      <div className="text-2xl font-bold text-slate-900">{value}</div>
                      <div className="text-xs font-semibold text-slate-500">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-md border border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-700">
                  {t.mockup.latestError}
                </div>
              </div>
            )}

            {activeTab === 'Settings' && (
              <div className="space-y-3" role="tabpanel">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Settings className="h-4 w-4 text-[#446362]" aria-hidden="true" />
                  {t.mockup.setupStatus}
                </div>
                {t.mockup.settings.map((item) => (
                  <ReadinessItem key={item}>{item}</ReadinessItem>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
