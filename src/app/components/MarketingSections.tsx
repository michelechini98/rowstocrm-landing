import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage';
import { BookingLink } from './BookingLink';

type CtaStripVariant = 'comparison' | 'journey';

export function CtaStrip({ variant }: { variant: CtaStripVariant }) {
  const { t } = useLanguage();
  const content = t.ctaStrip[variant];

  return (
    <section className="bg-white px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-lg font-semibold text-slate-900">{content.title}</p>
        <BookingLink
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#446362] px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-[#365251] sm:w-auto"
          ctaLocation={`cta_strip_${variant}`}
        >
          {content.cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </BookingLink>
      </div>
    </section>
  );
}

export function CompleteRecords() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-slate-950 sm:text-4xl">{t.records.title}</h2>
          <p className="text-lg leading-relaxed text-slate-600">{t.records.subtitle}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {t.records.steps.map((step, index) => (
            <div className="flex min-w-0 items-center gap-3 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm lg:flex-col lg:items-start" key={step}>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#446362] text-sm font-bold text-white">
                {index === t.records.steps.length - 1 ? <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> : index + 1}
              </div>
              <div className="font-semibold text-slate-900">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AfterDemo() {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">{t.afterDemo.title}</h2>
          <BookingLink
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#446362] px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-[#365251] sm:w-auto"
            ctaLocation="after_demo"
          >
            {t.afterDemo.cta}
          </BookingLink>
        </div>

        <ol className="grid gap-3 md:grid-cols-5">
          {t.afterDemo.steps.map((step, index) => (
            <li className="min-w-0 rounded-xl border border-slate-200 bg-white p-4" key={step}>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-[#446362]">
                {index + 1}
              </div>
              <p className="text-sm leading-relaxed text-slate-700">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
