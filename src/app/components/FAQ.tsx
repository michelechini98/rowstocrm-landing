import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is RowsToCRM an official Google or Brevo product?',
      answer: 'No. RowsToCRM is an independent setup that integrates with Google Sheets and Brevo. It is not affiliated with, endorsed by, or sponsored by Google or Brevo.'
    },
    {
      question: 'Do I need technical skills?',
      answer: 'No advanced automation skills are required. The setup is guided and managed from Google Sheets through an intuitive sidebar interface.'
    },
    {
      question: 'Does this replace generic automation tools?',
      answer: 'Use generic automation tools when you only need simple app-to-app automation. RowsToCRM is designed specifically for Brevo lead intake workflows that require mapping, companies, lists, events, row status and recovery.'
    },
    {
      question: 'Can it work with Jotform or Google Forms?',
      answer: 'Yes, when leads are collected into a Google Sheet. RowsToCRM works with any data that arrives in Google Sheets, including form exports, event registrations, and partner lists.'
    },
    {
      question: 'What happens when a row fails?',
      answer: 'The row status and error message help the operator review what went wrong, fix the data if needed, and retry the row safely without affecting successfully processed rows.'
    },
    {
      question: 'Can I process rows in bulk?',
      answer: 'Yes. RowsToCRM supports both individual row processing and bulk operations, with clear status tracking for every row processed.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                aria-controls={`faq-panel-${index}`}
                aria-expanded={openIndex === index}
                id={`faq-button-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-8">{faq.question}</h3>
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
                  className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4"
                  id={`faq-panel-${index}`}
                  role="region"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
