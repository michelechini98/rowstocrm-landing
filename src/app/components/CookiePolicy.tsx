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
      'Al momento la landing page RowsToCRM non include script di analytics, advertising, retargeting o marketing tracking.',
      'Il sito può usare local storage per salvare la preferenza lingua EN/IT e migliorare l’esperienza di navigazione senza richiedere un nuovo selettore a ogni visita.',
      'Eventuali cookie tecnici possono essere usati solo per il corretto funzionamento, sicurezza, routing o pubblicazione del sito.',
    ],
  },
  {
    title: '3. Cookie banner',
    body: [
      'Poiché non sono attivi cookie non essenziali, analytics o marketing tracking, non è stato implementato un cookie banner.',
      'Se in futuro verranno aggiunti strumenti non essenziali, RowsToCRM aggiornerà questa policy e introdurrà, quando necessario, un meccanismo di consenso.',
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
          . Questa pagina descrive l’uso di cookie tecnici e local storage per funzionalità essenziali e preferenza lingua.
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
