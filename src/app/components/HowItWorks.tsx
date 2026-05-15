import { ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    { title: 'Open Sidebar', description: 'Launch the Brevo Integration from your Google Sheet menu' },
    { title: 'Connect Brevo', description: 'Authenticate with your Brevo API key' },
    { title: 'Create Mapping', description: 'Map columns to contact fields, company fields, and lists' },
    { title: 'Create Tracking Columns', description: 'Add status, error, and timestamp columns' },
    { title: 'Run Checks', description: 'Validate your setup and integration health' },
    { title: 'Process Ready Rows', description: 'Sync prepared rows to Brevo with one click' },
    { title: 'Monitor Results', description: 'Review row-level statuses and retry failed rows' }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A straightforward workflow that takes you from raw spreadsheet data to structured Brevo records
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-emerald-200 hidden md:block"></div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
