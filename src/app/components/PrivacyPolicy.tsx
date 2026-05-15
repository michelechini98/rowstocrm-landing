import { contactEmail, demoBookingUrl, privacyEmail, siteUrl } from '../../config/links';

const sections = [
  {
    title: '1. Titolare del trattamento',
    body: [
      'Il Titolare del trattamento è [NOME COGNOME], con sede in Italia.',
      `Per richieste relative alla privacy puoi scrivere a ${privacyEmail}. Per richieste generali puoi scrivere a ${contactEmail}.`,
    ],
  },
  {
    title: '2. Ambito di questa informativa',
    body: [
      `Questa informativa descrive come RowsToCRM tratta i dati personali raccolti attraverso il sito web ${siteUrl} e durante le richieste di contatto, demo o informazioni sul servizio.`,
      'RowsToCRM è un prodotto indipendente. Non è affiliato, approvato o sponsorizzato da Google o Brevo.',
    ],
  },
  {
    title: '3. Dati personali trattati',
    body: [
      'Possiamo trattare dati identificativi e di contatto, come nome, cognome, indirizzo email, azienda, ruolo professionale e contenuto dei messaggi inviati volontariamente tramite email o moduli di contatto.',
      'Possiamo inoltre trattare dati tecnici di navigazione, come indirizzo IP, informazioni sul dispositivo, browser, pagine visitate, data e ora della visita e dati raccolti tramite cookie o tecnologie simili.',
    ],
  },
  {
    title: '4. Finalità del trattamento',
    body: [
      'I dati sono trattati per rispondere alle richieste ricevute, gestire demo e comunicazioni commerciali, fornire informazioni sul setup RowsToCRM, migliorare il sito, garantire sicurezza tecnica e adempiere a obblighi legali.',
      'Il sito pubblico non esegue chiamate API verso Google Sheets, Google Workspace o Brevo. Tali servizi possono essere rilevanti durante valutazioni, demo o setup richiesti dall’utente.',
    ],
  },
  {
    title: '5. Basi giuridiche',
    body: [
      'Le basi giuridiche del trattamento possono includere l’esecuzione di misure precontrattuali richieste dall’utente, il consenso ove richiesto, il legittimo interesse a rispondere alle richieste e proteggere il sito, e l’adempimento di obblighi legali.',
    ],
  },
  {
    title: '6. Cookie e tecnologie simili',
    body: [
      'Il sito può utilizzare cookie tecnici o local storage per funzionalità essenziali, inclusa la preferenza lingua EN/IT.',
      'Al momento non sono stati aggiunti script di analytics o marketing tracking nella landing page.',
    ],
  },
  {
    title: '7. Fornitori e destinatari',
    body: [
      'I dati possono essere trattati da fornitori tecnici che supportano hosting, DNS, routing email, manutenzione del sito, gestione email, prenotazioni demo o sicurezza. Tali fornitori agiscono, ove necessario, come responsabili del trattamento.',
      'Cloudflare può essere utilizzato come provider per hosting, DNS, routing email e sicurezza del sito.',
      `Il provider per la prenotazione delle demo è zcal. L'URL ufficiale per prenotare una demo è ${demoBookingUrl}.`,
      'Google Sheets, Google Workspace e Brevo possono essere trattati come servizi terzi collegati al contesto operativo del setup richiesto dall’utente.',
      'I dati non vengono venduti. Potranno essere comunicati ad autorità o soggetti legittimati quando richiesto dalla legge.',
    ],
  },
  {
    title: '8. Trasferimenti extra UE',
    body: [
      'Alcuni fornitori tecnici potrebbero trattare dati al di fuori dello Spazio Economico Europeo. In tal caso, il trasferimento avverrà sulla base di strumenti previsti dal GDPR, come decisioni di adeguatezza o clausole contrattuali standard.',
    ],
  },
  {
    title: '9. Conservazione dei dati',
    body: [
      'I dati sono conservati per il tempo necessario a gestire le richieste, fornire informazioni sul servizio, adempiere a obblighi legali e tutelare i diritti del Titolare.',
      'Le comunicazioni commerciali e di contatto vengono conservate per un periodo proporzionato alla relazione con l’utente, salvo richiesta di cancellazione o obblighi di conservazione applicabili.',
    ],
  },
  {
    title: '10. Diritti degli utenti',
    body: [
      'Gli utenti possono richiedere accesso, rettifica, cancellazione, limitazione, opposizione al trattamento e portabilità dei dati nei casi previsti dal GDPR.',
      `Per esercitare i diritti puoi scrivere a ${privacyEmail}. Hai inoltre diritto di proporre reclamo all’autorità di controllo competente.`,
    ],
  },
  {
    title: '11. Aggiornamenti',
    body: [
      'Questa informativa può essere aggiornata per riflettere modifiche normative, tecniche o operative. La versione pubblicata su questa pagina è quella attualmente applicabile.',
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <main className="bg-gradient-to-b from-emerald-50 to-white px-6 py-16">
      <article className="mx-auto max-w-4xl rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-10">
        <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#446362]">
          RowsToCRM
        </p>

        <h1 className="mb-4 text-4xl font-bold text-slate-950">Informativa Privacy</h1>
        <p className="mb-8 text-lg leading-relaxed text-slate-600">
          Informativa Privacy di RowsToCRM per il sito <a className="font-semibold text-[#446362] underline" href={siteUrl}>{siteUrl}</a>.
          Questa pagina descrive dati trattati, finalità, basi giuridiche, cookie, fornitori, conservazione e diritti degli utenti.
        </p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">{section.title}</h2>
              <div className="space-y-3 text-base leading-relaxed text-slate-700">
                {section.body.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          Ultimo aggiornamento: 15 maggio 2026.
        </p>
      </article>
    </main>
  );
}
