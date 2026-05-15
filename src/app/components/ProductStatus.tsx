export type RowStatus = 'READY' | 'PROCESSING' | 'DONE' | 'ERROR' | 'SKIPPED';

const statusStyles: Record<RowStatus, string> = {
  READY: 'border-slate-200 bg-slate-50 text-slate-700',
  PROCESSING: 'border-blue-200 bg-blue-50 text-blue-700',
  DONE: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  ERROR: 'border-rose-200 bg-rose-50 text-rose-700',
  SKIPPED: 'border-amber-200 bg-amber-50 text-amber-700',
};

const statusDotStyles: Record<RowStatus, string> = {
  READY: 'bg-slate-400',
  PROCESSING: 'bg-blue-500',
  DONE: 'bg-emerald-500',
  ERROR: 'bg-rose-500',
  SKIPPED: 'bg-amber-500',
};

export function StatusBadge({ status }: { status: RowStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyles[status]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[status]}`} aria-hidden="true" />
      {status}
    </span>
  );
}

export function StatusLegend() {
  const { t } = useLanguage();
  const statuses: RowStatus[] = ['READY', 'PROCESSING', 'DONE', 'ERROR', 'SKIPPED'];

  return (
    <div className="flex flex-wrap gap-2" aria-label={t.tracking.statusLegend}>
      {statuses.map((status) => (
        <StatusBadge key={status} status={status} />
      ))}
    </div>
  );
}
import { useLanguage } from '../../i18n/useLanguage';
