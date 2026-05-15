import { ArrowRight, Calendar } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-700 to-emerald-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
          <Calendar className="w-8 h-8 text-white" aria-hidden="true" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Want to turn your spreadsheet into a Brevo lead intake workflow?
        </h2>

        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Book a 20-minute demo to see how RowsToCRM can streamline your lead processing workflow
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="CALENDLY_URL_PLACEHOLDER" className="px-8 py-4 bg-white text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors inline-flex items-center gap-2 justify-center">
            <span>Book a 20-minute demo</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="#setup-package" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors">
            View setup package
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-600">
          <div className="grid md:grid-cols-3 gap-8 text-emerald-100">
            <div>
              <div className="text-3xl font-bold text-white mb-2">No workflows</div>
              <div className="text-sm">Guided setup, not automation building</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Full records</div>
              <div className="text-sm">Contact + company + linking in one row</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Clear status</div>
              <div className="text-sm">Row-level tracking and error recovery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
