import { Activity, CheckCircle2, Database, RefreshCw, Settings, ShieldCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type MockupTab = 'Home' | 'Mapping' | 'Health' | 'Settings';
type RowStatus = 'DONE' | 'READY' | 'ERROR' | 'SKIPPED' | 'PROCESSING';

const tabs: MockupTab[] = ['Home', 'Mapping', 'Health', 'Settings'];

const initialRows: Array<{
  company: string;
  email: string;
  firstName: string;
  source: string;
  status: RowStatus;
}> = [
  { firstName: 'Sarah', company: 'Northstar Ops', email: 'sarah@northstar.example', source: 'Webinar', status: 'DONE' },
  { firstName: 'Marco', company: 'Fieldline Studio', email: 'marco@fieldline.example', source: 'Partner', status: 'READY' },
  { firstName: 'Lea', company: 'Brightpath Co', email: 'lea@brightpath.example', source: 'Jotform', status: 'ERROR' },
  { firstName: 'Nina', company: 'Summit Works', email: 'nina@summit.example', source: 'Event', status: 'SKIPPED' },
];

const mappings = [
  ['Email', 'Contact email'],
  ['First Name', 'Contact firstname'],
  ['Company', 'Company name'],
  ['Source', 'Event property'],
  ['List', 'Webinar Leads'],
];

const statusStyles: Record<RowStatus, string> = {
  DONE: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  READY: 'bg-slate-50 text-slate-600 border-slate-200',
  ERROR: 'bg-rose-50 text-rose-700 border-rose-200',
  SKIPPED: 'bg-amber-50 text-amber-700 border-amber-200',
  PROCESSING: 'bg-blue-50 text-blue-700 border-blue-200',
};

function StatusPill({ status }: { status: RowStatus }) {
  return (
    <span className={`inline-flex rounded-full border px-2 py-1 text-[11px] font-semibold ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

function ReadinessItem({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-slate-700">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#446362]" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export function InteractiveProductMockup() {
  const [activeTab, setActiveTab] = useState<MockupTab>('Home');
  const [rows, setRows] = useState(initialRows);
  const [message, setMessage] = useState('Demo preview ready.');
  const [isProcessing, setIsProcessing] = useState(false);
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
    setMessage('Processing ready rows in demo mode...');
    setRows((currentRows) =>
      currentRows.map((row) => (row.status === 'READY' ? { ...row, status: 'PROCESSING' } : row))
    );

    const timer = window.setTimeout(() => {
      setRows((currentRows) =>
        currentRows.map((row) => (row.status === 'PROCESSING' ? { ...row, status: 'DONE' } : row))
      );
      setMessage('Rows processed in demo mode.');
      setIsProcessing(false);
    }, 900);

    timers.current.push(timer);
  };

  const doneCount = rows.filter((row) => row.status === 'DONE').length;
  const readyCount = rows.filter((row) => row.status === 'READY').length;
  const errorCount = rows.filter((row) => row.status === 'ERROR').length;
  const skippedCount = rows.filter((row) => row.status === 'SKIPPED').length;

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-green-400" aria-hidden="true" />
          <span className="ml-3 text-sm font-medium text-slate-600">Google Sheets</span>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#446362] shadow-sm">Demo preview</span>
      </div>

      <div className="flex items-center gap-4 border-b border-slate-200 bg-white px-4 py-2 text-xs text-slate-500">
        <span className="font-semibold text-[#446362]">Lead intake sheet</span>
        <span aria-hidden="true">+</span>
        <span>RowsToCRM sidebar open</span>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 bg-white">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500">
            <span className="rounded bg-white px-2 py-1 shadow-sm">A</span>
            <span className="rounded bg-white px-2 py-1 shadow-sm">B</span>
            <span className="rounded bg-white px-2 py-1 shadow-sm">C</span>
            <span className="rounded bg-white px-2 py-1 shadow-sm">D</span>
            <span className="rounded bg-white px-2 py-1 shadow-sm">E</span>
            <span className="ml-auto text-[#446362]">Sync tracking visible</span>
          </div>

          <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[560px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="px-3 py-2 font-semibold">First Name</th>
                  <th className="px-3 py-2 font-semibold">Company</th>
                  <th className="px-3 py-2 font-semibold">Email</th>
                  <th className="px-3 py-2 font-semibold">Source</th>
                  <th className="px-3 py-2 font-semibold">Sync status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.email} className="border-b border-slate-100">
                    <td className="px-3 py-3 text-slate-800">{row.firstName}</td>
                    <td className="px-3 py-3 text-slate-700">{row.company}</td>
                    <td className="px-3 py-3 text-slate-500">{row.email}</td>
                    <td className="px-3 py-3 text-slate-600">{row.source}</td>
                    <td className="px-3 py-3">
                      <StatusPill status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="border-t border-slate-200 bg-slate-50 p-4 lg:border-l lg:border-t-0">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">RowsToCRM</h2>
              <ShieldCheck className="h-5 w-5 text-[#446362]" aria-hidden="true" />
            </div>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">Brevo lead intake from Google Sheets</p>
          </div>

          <div className="mb-4 grid grid-cols-4 gap-2" role="tablist" aria-label="RowsToCRM preview sections">
            {tabs.map((tab) => (
              <button
                aria-label={`Show ${tab} preview`}
                aria-selected={activeTab === tab}
                className={`rounded-md border px-2 py-2 text-xs font-semibold transition-colors ${
                  activeTab === tab
                    ? 'border-[#446362] bg-[#446362] text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-[#446362]/50'
                }`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="tab"
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            {activeTab === 'Home' && (
              <div className="space-y-3" role="tabpanel">
                <ReadinessItem>Brevo connected</ReadinessItem>
                <ReadinessItem>Mapping ready</ReadinessItem>
                <ReadinessItem>Tracking columns ready</ReadinessItem>
                <button
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#446362] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#365251] disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={isProcessing}
                  onClick={processReadyRows}
                  type="button"
                >
                  <RefreshCw className={`h-4 w-4 ${isProcessing ? 'animate-spin' : ''}`} aria-hidden="true" />
                  Process Ready Rows
                </button>
                <p className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600" aria-live="polite">
                  {message}
                </p>
              </div>
            )}

            {activeTab === 'Mapping' && (
              <div className="space-y-3" role="tabpanel">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Database className="h-4 w-4 text-[#446362]" aria-hidden="true" />
                  Saved mappings
                </div>
                <div className="space-y-2">
                  {mappings.map(([from, to]) => (
                    <div className="flex items-center justify-between gap-3 rounded-md border border-slate-100 bg-slate-50 px-3 py-2 text-xs" key={from}>
                      <span className="font-semibold text-slate-700">{from}</span>
                      <span className="text-slate-400" aria-hidden="true">-&gt;</span>
                      <span className="text-right text-slate-600">{to}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Health' && (
              <div className="space-y-3" role="tabpanel">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Activity className="h-4 w-4 text-[#446362]" aria-hidden="true" />
                  Sync health
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
                  Latest error: Company field missing on row 4.
                </div>
              </div>
            )}

            {activeTab === 'Settings' && (
              <div className="space-y-3" role="tabpanel">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Settings className="h-4 w-4 text-[#446362]" aria-hidden="true" />
                  Setup status
                </div>
                <ReadinessItem>API key connected</ReadinessItem>
                <ReadinessItem>Tracking columns ready</ReadinessItem>
                <ReadinessItem>Brevo data refreshed</ReadinessItem>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
