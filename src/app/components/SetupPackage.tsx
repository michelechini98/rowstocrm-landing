import { Check } from 'lucide-react';

export function SetupPackage() {
  const includes = [
    'Google Sheet preparation',
    'Brevo API connection',
    'Field mapping configuration',
    'List configuration',
    'Company linking setup',
    'Optional event configuration',
    'Sync tracking columns',
    'Setup and integration checks',
    'End-to-end smoke test',
    'Operating guide'
  ];

  return (
    <section id="setup-package" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            RowsToCRM Setup Package
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A guided setup to configure your Google Sheet, connect Brevo, map fields, prepare tracking columns and validate the workflow with an end-to-end test.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-10 border-2 border-emerald-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's included</h3>
              <ul className="space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div className="bg-white rounded-xl p-8 shadow-md mb-6">
                <div className="text-sm text-gray-600 mb-2">Setup investment</div>
                <div className="text-5xl font-bold text-gray-900 mb-2">€690</div>
                <div className="text-gray-600 mb-4">Standard setup package</div>
                <div className="text-sm text-gray-500 border-t pt-4">
                  Advanced projects require review and custom pricing
                </div>
              </div>

              <a href="CALENDLY_URL_PLACEHOLDER" className="inline-flex w-full items-center justify-center px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition-colors">
                Book a demo
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Custom requirements, large-scale deployments or agency partnerships welcome
          </p>
        </div>
      </div>
    </section>
  );
}
