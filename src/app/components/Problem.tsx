import { useLanguage } from '../../i18n/useLanguage';

export function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          {t.problem.title}
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          {t.problem.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {t.problem.cards.map((card) => (
            <div className="p-6 bg-gray-50 rounded-lg" key={card.title}>
              <div className="text-3xl mb-3" aria-hidden="true">{card.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
