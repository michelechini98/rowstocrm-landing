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
    <section id="who-it-is-for" className="bg-gradient-to-b from-white to-gray-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
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

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[t.audience.bestFit, t.audience.notFit].map((group, index) => (
            <div className={`rounded-2xl border p-5 sm:p-6 ${index === 0 ? 'border-emerald-100 bg-emerald-50' : 'border-slate-200 bg-white'}`} key={group.title}>
              <h3 className="mb-4 text-xl font-bold text-slate-950">{group.title}</h3>
              <ul className="space-y-3">
                {group.bullets.map((item) => (
                  <li className="flex gap-3 text-sm leading-relaxed text-slate-700" key={item}>
                    <span className={index === 0 ? 'font-bold text-emerald-700' : 'font-bold text-slate-400'}>{index === 0 ? '✓' : '•'}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
