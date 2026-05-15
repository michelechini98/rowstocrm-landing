import { ArrowRight } from 'lucide-react';

export function Solution() {
  return (
    <section id="solution" className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            A guided Brevo lead intake workflow, inside Google Sheets
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            RowsToCRM gives operators a sidebar to connect Brevo, configure mappings, create tracking columns, run checks and process prepared rows without leaving the spreadsheet.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Map your columns</h3>
                  <p className="text-gray-600">Assign Sheet columns to Brevo contact fields, company fields and event properties</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Create tracking columns</h3>
                  <p className="text-gray-600">Add status, timestamp and error columns to monitor sync results</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Process rows</h3>
                  <p className="text-gray-600">One row creates contact, company, linking, list assignment and optional event</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Contact data → Brevo contact</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-1" aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Company data → Brevo company</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-1" aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Automatic contact-company link</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-1" aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">List assignment + event trigger</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
