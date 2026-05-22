import { Menu } from 'lucide-react';
import { Language } from '../../i18n/translations';
import { useLanguage } from '../../i18n/useLanguage';
import { BookingLink } from './BookingLink';

function LanguageSelect({ compact = false, mobileTopBar = false }: { compact?: boolean; mobileTopBar?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  const optionLabels: Record<Language, string> = mobileTopBar
    ? {
        en: '🇬🇧 EN',
        it: '🇮🇹 IT',
      }
    : {
        en: 'EN',
        it: 'IT',
      };

  return (
    <label className={compact || mobileTopBar ? 'block shrink-0' : 'inline-flex items-center gap-2'}>
      <span className={compact ? 'mb-2 block text-sm font-semibold text-slate-700' : 'sr-only'}>{t.nav.languageLabel}</span>
      <select
        aria-label={t.nav.languageLabel}
        className={
          mobileTopBar
            ? 'min-h-11 max-w-[5.75rem] rounded-md border border-slate-200 bg-white px-2 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-[#446362]/60 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-[#446362] focus:ring-offset-2'
            : 'rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-[#446362]/60 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-[#446362] focus:ring-offset-2'
        }
        onChange={(event) => setLanguage(event.target.value as Language)}
        value={language}
      >
        <option value="en">{optionLabels.en}</option>
        <option value="it">{optionLabels.it}</option>
      </select>
    </label>
  );
}

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 px-4 backdrop-blur sm:px-6">
      <nav aria-label={t.nav.aria} className="mx-auto flex max-w-7xl items-center justify-between gap-3 py-4 lg:gap-6">
        <a className="shrink-0 text-lg font-bold text-slate-900" href="#top">
          RowsToCRM
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          <a className="text-sm font-medium text-slate-600 hover:text-[#446362]" href="/#solution">
            {t.nav.product}
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-[#446362]" href="/#how-it-works">
            {t.nav.howItWorks}
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-[#446362]" href="/#setup-package">
            {t.nav.setupPackage}
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-[#446362]" href="/#faq">
            {t.nav.faq}
          </a>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelect />
          <BookingLink
            className="rounded-lg bg-[#446362] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#365251]"
            ctaLocation="header_desktop"
          >
            {t.nav.bookDemo}
          </BookingLink>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <LanguageSelect mobileTopBar />

          <details className="group relative">
            <summary
              aria-label={t.nav.menu}
              className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#446362] focus:ring-offset-2"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
              <span className="hidden min-[360px]:inline">{t.nav.menu}</span>
            </summary>
            <div className="absolute right-0 mt-3 w-[min(18rem,calc(100vw-2rem))] rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="grid gap-3">
                <a className="text-sm font-medium text-slate-700" href="/#solution">{t.nav.product}</a>
                <a className="text-sm font-medium text-slate-700" href="/#how-it-works">{t.nav.howItWorks}</a>
                <a className="text-sm font-medium text-slate-700" href="/#setup-package">{t.nav.setupPackage}</a>
                <a className="text-sm font-medium text-slate-700" href="/#faq">{t.nav.faq}</a>
                <LanguageSelect compact />
                <BookingLink
                  className="rounded-lg bg-[#446362] px-4 py-3 text-center text-sm font-semibold text-white"
                  ctaLocation="header_mobile"
                >
                  {t.nav.bookDemo}
                </BookingLink>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
