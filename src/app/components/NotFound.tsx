import { ArrowRight } from 'lucide-react';
import { BookingLink } from './BookingLink';

export function NotFound() {
  return (
    <main className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16 sm:px-6 sm:py-24">
      <section className="mx-auto max-w-3xl rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-10">
        <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#446362]">
          RowsToCRM
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-950 sm:text-5xl">Page not found</h1>
        <p className="mb-8 text-lg leading-relaxed text-slate-600">
          This RowsToCRM page is not available. You can return to the homepage or book a setup review if you want to discuss a Google Sheets to Brevo workflow.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-emerald-200 bg-white px-5 py-3 text-center font-semibold text-[#446362] transition-colors hover:bg-emerald-50 sm:w-auto"
            href="/"
          >
            Back to homepage
          </a>
          <BookingLink className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#446362] px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-[#365251] sm:w-auto">
            Book a 20-minute setup review
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </BookingLink>
        </div>
      </section>
    </main>
  );
}
