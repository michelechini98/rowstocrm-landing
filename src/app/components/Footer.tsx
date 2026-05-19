import { contactEmail, cookiePolicyUrl, privacyUrl, termsUrl } from '../../config/links';
import { useLanguage } from '../../i18n/useLanguage';
import { seoLandingPageList } from '../seoLandingPages';
import { trackEvent } from '../lib/tracking';
import { BookingLink } from './BookingLink';

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-gray-900 px-4 py-12 text-gray-400 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-3">RowsToCRM</h3>
            <p className="text-sm">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="/#setup-package" className="hover:text-white transition-colors">{t.nav.setupPackage}</a></li>
              {seoLandingPageList.map((page) => (
                <li key={page.en.path}>
                  <a href={page.en.path} className="hover:text-white transition-colors">
                    {page[language].navLabel}
                  </a>
                </li>
              ))}
              <li>
                <BookingLink className="hover:text-white transition-colors" ctaLocation="footer_product_demo" trackingEventName="footer_cta_click">
                  {t.nav.bookDemo}
                </BookingLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{t.footer.support}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#faq" className="hover:text-white transition-colors">{t.nav.faq}</a></li>
              <li><a href={termsUrl} className="hover:text-white transition-colors">{t.footer.terms}</a></li>
              <li><a href={privacyUrl} className="hover:text-white transition-colors">{t.footer.privacy}</a></li>
              <li><a href={cookiePolicyUrl} className="hover:text-white transition-colors">{t.footer.cookiePolicy}</a></li>
              <li>
                <button
                  className="text-left transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#446362] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  type="button"
                  onClick={() => window.dispatchEvent(new Event('rowstocrm:open-cookie-preferences'))}
                >
                  Cookie settings
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-white transition-colors"
                  onClick={() =>
                    trackEvent('contact_link_click', {
                      cta_href: `mailto:${contactEmail}`,
                      cta_location: 'footer_contact',
                      cta_text: t.footer.contact,
                    })
                  }
                >
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              {t.footer.disclaimer}
            </p>
            <p className="text-sm">
              © 2026 RowsToCRM. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
