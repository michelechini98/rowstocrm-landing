export type ProductIconName =
  | 'spreadsheet-cell'
  | 'contact-company-link'
  | 'status-badge'
  | 'retry-row'
  | 'sidebar-panel'
  | 'list-assignment';

const base = 'mb-4 h-12 w-12 rounded-lg border border-emerald-100 bg-emerald-50 p-2 text-[#446362]';

export function ProductIcon({ name }: { name: ProductIconName }) {
  return (
    <div className={base} aria-hidden="true">
      {name === 'spreadsheet-cell' && (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M8 20h32M8 29h32M19 10v28M30 10v28" stroke="currentColor" strokeWidth="2" />
          <rect x="20" y="21" width="9" height="7" rx="1.5" fill="currentColor" opacity="0.16" />
        </svg>
      )}

      {name === 'contact-company-link' && (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="15" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
          <path d="M8 34c1.6-6 12.4-6 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="28" y="14" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M31 19h6M31 24h6M22 24h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {name === 'status-badge' && (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="14" width="32" height="20" rx="10" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="24" r="4" fill="currentColor" opacity="0.22" />
          <path d="M25 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {name === 'retry-row' && (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M34 17a13 13 0 1 0 2.2 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M34 10v7h-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="17" y="22" width="14" height="7" rx="2" fill="currentColor" opacity="0.16" />
        </svg>
      )}

      {name === 'sidebar-panel' && (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M28 10v28" stroke="currentColor" strokeWidth="2" />
          <path d="M32 17h4M32 23h4M32 29h4M13 18h10M13 25h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {name === 'list-assignment' && (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="10" y="11" width="28" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M17 19h14M17 25h14M17 31h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="m33 30 2 2 5-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}
