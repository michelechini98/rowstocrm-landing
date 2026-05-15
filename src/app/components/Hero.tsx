import { CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full mb-6">
              For Brevo Users
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Google Sheets rows into Brevo-ready leads, without complex automation workflows
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              RowsToCRM helps you map spreadsheet columns, assign lists, link companies, send optional events and track every row directly from a guided Google Sheets sidebar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="CALENDLY_URL_PLACEHOLDER" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition-colors">
                Book a 20-minute demo
              </a>
              <a href="#setup-package" className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                View setup package
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Contact + company + linking in one row</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Guided sidebar inside Google Sheets</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Row-level sync tracking and error recovery</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true"></div>
                <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true"></div>
                <span className="ml-4 text-sm text-gray-600">Google Sheets</span>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="min-w-0 flex-1 p-4 bg-white">
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 gap-2 text-xs font-semibold text-gray-500 pb-2 border-b">
                      <div>Name</div>
                      <div>Company</div>
                      <div>Email</div>
                      <div>Status</div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs sm:text-sm py-2 border-b border-gray-100">
                      <div className="min-w-0 break-words">Sarah Johnson</div>
                      <div className="min-w-0 break-words">Acme Corp</div>
                      <div className="min-w-0 break-all text-gray-500">sarah@acme.com</div>
                      <div className="text-emerald-600 font-medium">DONE</div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs sm:text-sm py-2 border-b border-gray-100">
                      <div className="min-w-0 break-words">Mike Chen</div>
                      <div className="min-w-0 break-words">TechStart</div>
                      <div className="min-w-0 break-all text-gray-500">mike@techstart.io</div>
                      <div className="text-blue-600 font-medium">PROCESSING</div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs sm:text-sm py-2 border-b border-gray-100">
                      <div className="min-w-0 break-words">Emma Wilson</div>
                      <div className="min-w-0 break-words">DataFlow Inc</div>
                      <div className="min-w-0 break-all text-gray-500">emma@dataflow.com</div>
                      <div className="text-gray-400 font-medium">READY</div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-72 lg:w-80 bg-gray-50 border-t md:border-l md:border-t-0 border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Brevo Integration</h3>

                  <div className="space-y-3">
                    <div className="w-full text-left px-3 py-2 bg-emerald-700 text-white rounded">
                      Home
                    </div>
                    <div className="w-full text-left px-3 py-2 text-gray-700 rounded">
                      Mapping
                    </div>
                    <div className="w-full text-left px-3 py-2 text-gray-700 rounded">
                      Health
                    </div>
                    <div className="w-full text-left px-3 py-2 text-gray-700 rounded">
                      Settings
                    </div>
                  </div>

                  <div className="mt-6 p-3 bg-white rounded border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Recent Sync</div>
                    <div className="text-2xl font-bold text-gray-900">127</div>
                    <div className="text-xs text-emerald-600">contacts synced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
