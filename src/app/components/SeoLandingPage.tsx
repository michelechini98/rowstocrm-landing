import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Language } from '../../i18n/translations';
import { useLanguage } from '../../i18n/useLanguage';
import { seoLandingPages, type SeoLandingPageContent } from '../seoLandingPages';
import { BookingLink } from './BookingLink';

type SeoLandingPageProps = {
  page: Record<Language, SeoLandingPageContent>;
};

function RowPreview({ content, language }: { content: SeoLandingPageContent; language: Language }) {
  const labels = language === 'it' ? ['Email', 'Nome', 'Azienda', 'Lista'] : ['Email', 'Name', 'Company', 'List'];

  return (
    <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <p className="mb-3 text-sm font-semibold text-slate-600">{content.example.rowLabel}</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              {labels.map((label) => (
                <th className="border-b border-slate-200 px-3 py-2 font-semibold" key={label}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="text-slate-800">
              {content.example.row.map((cell) => (
                <td className="border-b border-slate-100 px-3 py-3 last:border-b-0" key={cell}>
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OutcomePreview({ content }: { content: SeoLandingPageContent }) {
  return (
    <div className="min-w-0 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 shadow-sm sm:p-5">
      <p className="mb-3 text-sm font-semibold text-[#446362]">{content.example.outcomeTitle}</p>
      <ul className="space-y-3">
        {content.example.outcomes.map((outcome) => (
          <li className="flex min-w-0 items-start gap-3 text-sm leading-relaxed text-slate-700" key={outcome}>
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#446362]" aria-hidden="true" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SeoLandingPage({ page }: SeoLandingPageProps) {
  const { language } = useLanguage();
  const content = page[language];
  const relatedPages = content.relatedPageKeys.map((key) => seoLandingPages[key].en);

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#446362]">
              RowsToCRM
            </p>
            <h1 className="mb-5 max-w-4xl text-[clamp(2.25rem,7vw,4rem)] font-bold leading-tight text-slate-950">
              {content.h1}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">{content.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookingLink
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#446362] px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-[#365251] sm:w-auto"
                ctaLocation="seo_page_hero"
                trackingEventName="seo_page_cta_click"
              >
                {content.cta.button}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </BookingLink>
              <a
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-emerald-200 bg-white px-5 py-3 text-center font-semibold text-[#446362] transition-colors hover:bg-emerald-50 sm:w-auto"
                href="/"
              >
                Back to RowsToCRM
              </a>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-emerald-100 bg-white p-4 shadow-xl shadow-emerald-100/70 sm:p-6">
            <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-300" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-300" />
              <span className="ml-2 truncate rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">Google Sheets</span>
            </div>
            <div className="grid min-w-0 gap-4 md:grid-cols-[1fr_0.78fr]">
              <RowPreview content={content} language={language} />
              <OutcomePreview content={content} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-4 text-2xl font-bold text-slate-950 sm:text-3xl">{content.problem.title}</h2>
            <p className="mb-5 leading-relaxed text-slate-600">{content.problem.body}</p>
            <ul className="space-y-3">
              {content.problem.bullets.map((bullet) => (
                <li className="flex min-w-0 items-start gap-3 text-slate-700" key={bullet}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="min-w-0 rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm sm:p-6">
            <h2 className="mb-4 text-2xl font-bold text-slate-950 sm:text-3xl">{content.solution.title}</h2>
            <p className="mb-5 leading-relaxed text-slate-600">{content.solution.body}</p>
            <ul className="space-y-3">
              {content.solution.bullets.map((bullet) => (
                <li className="flex min-w-0 items-start gap-3 text-slate-700" key={bullet}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#446362]" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-950 sm:text-4xl">{content.example.title}</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            <RowPreview content={content} language={language} />
            <OutcomePreview content={content} />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-950 sm:text-4xl">FAQ</h2>
          <div className="space-y-3">
            {content.faq.map(([question, answer]) => (
              <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" key={question}>
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#446362]">
                  {question}
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-950 sm:text-3xl">Related RowsToCRM guides</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPages.map((relatedPage) => (
              <a
                className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-emerald-200 hover:bg-emerald-50"
                href={relatedPage.path}
                key={relatedPage.path}
              >
                <span className="mb-3 block text-sm font-semibold text-[#446362]">{relatedPage.navLabel}</span>
                <span className="block text-lg font-bold leading-snug text-slate-950">{relatedPage.h1}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold text-slate-950">{content.cta.title}</h2>
            <p className="mt-2 leading-relaxed text-slate-600">{content.cta.body}</p>
          </div>
          <BookingLink
            className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#446362] px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-[#365251] sm:w-auto"
            ctaLocation="seo_page_bottom"
            trackingEventName="seo_page_cta_click"
          >
            {content.cta.button}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </BookingLink>
        </div>
      </section>
    </main>
  );
}
