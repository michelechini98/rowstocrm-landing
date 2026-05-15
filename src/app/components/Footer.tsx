export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-3">RowsToCRM</h3>
            <p className="text-sm">
              Guided Brevo lead intake workflow for Google Sheets
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#setup-package" className="hover:text-white transition-colors">Setup package</a></li>
              <li><a href="CALENDLY_URL_PLACEHOLDER" className="hover:text-white transition-colors">Book a demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="TERMS_URL_PLACEHOLDER" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="PRIVACY_URL_PLACEHOLDER" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="mailto:CONTACT_EMAIL_PLACEHOLDER" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              Independent setup. Not affiliated with, endorsed by, or sponsored by Google or Brevo.
            </p>
            <p className="text-sm">
              © 2026 RowsToCRM. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
