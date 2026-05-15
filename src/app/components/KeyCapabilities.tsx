import { Map, List, Building2, Zap, Activity, RefreshCw, CheckCircle, Layout } from 'lucide-react';

export function KeyCapabilities() {
  const capabilities = [
    {
      icon: Map,
      title: 'Guided field mapping',
      description: 'Map Sheet columns to Brevo contact and company fields with a visual interface'
    },
    {
      icon: List,
      title: 'Brevo list assignment',
      description: 'Automatically add contacts to configured Brevo lists during sync'
    },
    {
      icon: Building2,
      title: 'Company creation and linking',
      description: 'Create or update companies and link them to contacts automatically'
    },
    {
      icon: Zap,
      title: 'Optional automation events',
      description: 'Trigger Brevo automations with custom events and properties'
    },
    {
      icon: Activity,
      title: 'Row-level sync status',
      description: 'Track READY, PROCESSING, DONE, ERROR, and SKIPPED states per row'
    },
    {
      icon: RefreshCw,
      title: 'Error visibility and safe retry',
      description: 'See exactly what failed and retry individual rows without risk'
    },
    {
      icon: CheckCircle,
      title: 'Setup and integration checks',
      description: 'Validate configuration and API connection before processing'
    },
    {
      icon: Layout,
      title: 'Sidebar-based operation',
      description: 'Control everything from a dedicated panel inside Google Sheets'
    }
  ];

  return (
    <section id="capabilities" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Everything you need for Brevo lead intake
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Purpose-built capabilities that make Google Sheets a powerful lead processing system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-700" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-sm text-gray-600">{capability.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
