import { Zap, Target } from 'lucide-react';

export function Differentiation() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Built for Brevo lead intake, not generic automation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Generic automation tools are useful when you only need to move data from one app to another. RowsToCRM is designed for the full lead intake workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border-2 border-gray-200 rounded-xl">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-gray-500" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Generic automation platforms</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Require building multi-step workflows</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Complex configuration for company linking</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Limited row-level error visibility</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Separate tools for monitoring and retry</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Operators work outside the spreadsheet</span>
              </li>
            </ul>
          </div>

          <div className="p-8 border-2 border-emerald-600 rounded-xl bg-emerald-50">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">RowsToCRM</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Guided setup, no workflow building</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Native contact-company mapping and linking</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Row-level status tracking in the Sheet</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Built-in error review and safe retry</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Everything managed from the sidebar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
