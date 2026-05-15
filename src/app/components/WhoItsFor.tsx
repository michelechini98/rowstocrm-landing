import { Users, Briefcase, Building, UserCheck, Calendar } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage';

export function WhoItsFor() {
  const { t } = useLanguage();
  const icons = [Users, Briefcase, Building, UserCheck, Calendar];
  const colors = ['emerald', 'blue', 'purple', 'orange', 'pink'];

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
            {t.audience.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.audience.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.audience.cards.map(([title, description], index) => {
            const Icon = icons[index];
            const currentColors = colorMap[colors[index]];
            return (
              <div key={title} className={`p-6 bg-white border ${currentColors.border} rounded-lg hover:shadow-lg transition-shadow`}>
                <div className={`w-14 h-14 ${currentColors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${currentColors.icon}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
