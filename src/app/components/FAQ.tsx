import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faq.items.map(([question, answer], index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                aria-controls={`faq-panel-${index}`}
                aria-expanded={openIndex === index}
                id={`faq-button-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex min-h-11 w-full items-center justify-between px-4 py-5 text-left transition-colors hover:bg-gray-50 sm:px-6"
              >
                <h3 className="min-w-0 pr-4 font-semibold text-gray-900 sm:pr-8">{question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div
                  aria-labelledby={`faq-button-${index}`}
                  className="border-t border-gray-100 px-4 pb-5 pt-4 text-gray-600 sm:px-6"
                  id={`faq-panel-${index}`}
                  role="region"
                >
                  {answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
