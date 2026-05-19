import { privacyEmail, siteUrl } from '../../config/links';

const linkClass = 'font-semibold text-[#446362] underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[#446362] focus:ring-offset-2';

const sections = [
  {
    title: '1. Cosa sono cookie e tecnologie simili',
    body: [
      'Cookie, local storage e tecnologie simili permettono a un sito di ricordare informazioni tecniche o preferenze dell’utente sul dispositivo.',
      'In questa pagina “Cookie Policy” include anche l’uso del local storage quando serve per funzionalità essenziali del sito.',
    ],
  },
  {
    title: '2. Cookie e local storage usati da RowsToCRM',
    body: [
      'Il sito può usare local storage per salvare la preferenza lingua EN/IT e le preferenze cookie, così da non richiedere una nuova scelta a ogni visita.',
      'Eventuali cookie tecnici possono essere usati solo per il corretto funzionamento, sicurezza, routing o pubblicazione del sito.',
      'Strumenti opzionali di analytics o marketing possono essere attivati solo in base alle preferenze espresse tramite il banner cookie.',
    ],
  },
  {
    title: '3. Cookie banner',
    body: [
      'RowsToCRM mostra un banner cookie che permette di accettare tutti i cookie opzionali, rifiutare quelli non essenziali o personalizzare le preferenze.',
      'Le preferenze possono essere modificate in qualsiasi momento tramite il link “Cookie settings” nel footer del sito.',
    ],
  },
  {
    title: '4. Servizi tecnici',
    body: [
      'Provider tecnici come Cloudflare possono trattare informazioni tecniche necessarie a hosting, DNS, sicurezza, routing email e funzionamento del sito.',
      'Questi trattamenti sono legati alla sicurezza e alla pubblicazione del sito, non a finalità di profilazione marketing da parte di RowsToCRM.',
    ],
  },
  {
    title: '5. Gestione dal browser',
    body: [
      'Puoi cancellare cookie e dati locali dalle impostazioni del browser. La cancellazione della preferenza lingua può riportare il sito alla lingua rilevata dal browser o alla lingua di default.',
    ],
  },
];

export function CookiePolicy() {
  return (
    <main className="bg-gradient-to-b from-emerald-50 to-white px-4 py-14 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-4xl rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm [overflow-wrap:anywhere] sm:p-10">
        <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#446362]">
          RowsToCRM
        </p>

        <h1 className="mb-4 text-3xl font-bold text-slate-950 sm:text-4xl">Cookie Policy</h1>
        <p className="mb-8 text-lg leading-relaxed text-slate-600">
          Cookie Policy di RowsToCRM per il sito{' '}
          <a className={linkClass} href={siteUrl}>
            {siteUrl}
          </a>
          . Questa pagina descrive l’uso di cookie tecnici, local storage e preferenze per analytics o marketing opzionali.
        </p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">{section.title}</h2>
              <div className="space-y-3 text-base leading-relaxed text-slate-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          Per richieste privacy puoi scrivere a{' '}
          <a className={linkClass} href={`mailto:${privacyEmail}`}>
            {privacyEmail}
          </a>
          .
        </p>
      </article>
    </main>
  );
}
