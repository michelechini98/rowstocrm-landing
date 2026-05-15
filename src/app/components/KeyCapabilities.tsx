import { useLanguage } from '../../i18n/useLanguage';
import { ProductIcon, ProductIconName } from './ProductIcon';

export function KeyCapabilities() {
  const { t } = useLanguage();
  const capabilities = t.features.cards as ReadonlyArray<readonly [ProductIconName, string, string]>;

  return (
    <section id="capabilities" className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.features.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map(([icon, title, description], index) => {
            return (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-lg transition-all">
                <ProductIcon name={icon} />
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
