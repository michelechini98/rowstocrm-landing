import { Users, Briefcase, Building, UserCheck, Calendar } from 'lucide-react';

export function WhoItsFor() {
  const audiences = [
    {
      icon: Users,
      title: 'B2B marketing teams',
      description: 'Manage lead intake from forms, campaigns and events with proper company data structure',
      color: 'emerald'
    },
    {
      icon: Briefcase,
      title: 'Sales operations teams',
      description: 'Ensure partner leads and manual imports create complete CRM records in Brevo',
      color: 'blue'
    },
    {
      icon: Building,
      title: 'Marketing agencies',
      description: 'Set up reliable lead workflows for clients without complex technical integration',
      color: 'purple'
    },
    {
      icon: UserCheck,
      title: 'Brevo consultants',
      description: 'Deliver turnkey lead intake setups that clients can operate independently',
      color: 'orange'
    },
    {
      icon: Calendar,
      title: 'Event and webinar teams',
      description: 'Process registration lists into Brevo with company enrichment and automation triggers',
      color: 'pink'
    }
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-700', border: 'border-emerald-200' },
    blue: { bg: 'bg-blue-50', icon: 'text-blue-700', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-700', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-700', border: 'border-orange-200' },
    pink: { bg: 'bg-pink-50', icon: 'text-pink-700', border: 'border-pink-200' }
  };

  return (
    <section id="who-it-is-for" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Who it's for
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teams and professionals who need to turn spreadsheet rows into structured Brevo leads
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const colors = colorMap[audience.color];
            return (
              <div key={index} className={`p-6 bg-white border ${colors.border} rounded-lg hover:shadow-lg transition-shadow`}>
                <div className={`w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
