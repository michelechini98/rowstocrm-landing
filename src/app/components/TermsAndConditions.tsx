import { ReactNode } from 'react';
import { contactEmail, demoBookingUrl, privacyEmail, siteUrl } from '../../config/links';

type TermsSection = {
  title: string;
  body: ReactNode[];
};

const linkClass = 'font-semibold text-[#446362] underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[#446362] focus:ring-offset-2';

const termsSections: TermsSection[] = [
  {
    title: '1. Informazioni sul servizio',
    body: [
      <>
        RowsToCRM è un sito e servizio di setup indipendente per aiutare utenti Brevo a trasformare righe di Google Sheets in contatti,
        aziende, assegnazioni a liste, eventi opzionali e tracking riga per riga. Il sito ufficiale è{' '}
        <a className={linkClass} href={siteUrl}>
          {siteUrl}
        </a>
        .
      </>,
      'RowsToCRM non è affiliato, approvato o sponsorizzato da Google o Brevo. I marchi citati appartengono ai rispettivi titolari.',
    ],
  },
  {
    title: '2. Titolare e contatti',
    body: [
      'Il Titolare è [NOME COGNOME], con sede in Italia.',
      <>
        Per richieste generali puoi scrivere a{' '}
        <a className={linkClass} href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        . Per richieste privacy puoi scrivere a{' '}
        <a className={linkClass} href={`mailto:${privacyEmail}`}>
          {privacyEmail}
        </a>
        .
      </>,
    ],
  },
  {
    title: '3. Accettazione dei Termini',
    body: [
      'Usando il sito, prenotando una demo o richiedendo informazioni sul servizio, dichiari di aver letto e accettato questi Termini e Condizioni.',
      'Se agisci per conto di un’azienda o organizzazione, confermi di avere l’autorità necessaria per interagire con RowsToCRM per tale soggetto.',
    ],
  },
  {
    title: '4. Demo e richieste commerciali',
    body: [
      <>
        Le demo possono essere prenotate tramite zcal all’indirizzo{' '}
        <a className={linkClass} href={demoBookingUrl} rel="noopener noreferrer" target="_blank">
          {demoBookingUrl}
        </a>
        . La prenotazione non comporta automaticamente la conclusione di un contratto o l’obbligo di acquistare un servizio.
      </>,
      'Durante la demo possono essere raccolte informazioni sul caso d’uso, sui fogli di lavoro, sul setup Brevo e sulle esigenze operative, esclusivamente per valutare la configurazione più adatta.',
    ],
  },
  {
    title: '5. Setup e servizi professionali',
    body: [
      'RowsToCRM offre due pacchetti principali: Self-Setup Package, al prezzo di € 490 una tantum, e Guided Setup Package, al prezzo di € 690 una tantum.',
      'Entrambi i pacchetti riguardano lo stesso workflow Google Sheets → Brevo. La differenza è il livello di supporto incluso, non il prodotto configurato.',
      'Il Self-Setup Package include materiali, template, istruzioni e documentazione per configurare il workflow in autonomia. Non include installazione one-to-one, revisione personalizzata dello Sheet o formazione operatori.',
      'Il Guided Setup Package include installazione guidata, configurazione insieme, test end-to-end e formazione one-to-one.',
      'Le attività incluse, i tempi, il prezzo e gli eventuali limiti operativi vengono confermati prima dell’avvio del lavoro.',
    ],
  },
  {
    title: '6. Responsabilità dell’utente',
    body: [
      'L’utente è responsabile della correttezza, liceità e qualità dei dati inseriti nei fogli, delle autorizzazioni necessarie per trattarli e della gestione dei propri account Google, Brevo o di altri servizi collegati.',
      'L’utente deve evitare di condividere credenziali, API key o dati sensibili non necessari tramite email, moduli non protetti o canali non concordati.',
    ],
  },
  {
    title: '7. Servizi terzi',
    body: [
      'RowsToCRM può interagire o fare riferimento a servizi terzi come Google Sheets, Brevo, zcal, servizi di hosting, email e altri strumenti necessari alla gestione del sito o del setup.',
      'L’utilizzo di tali servizi resta soggetto ai rispettivi termini, policy e disponibilità tecnica. RowsToCRM non controlla le modifiche, interruzioni o limitazioni imposte dai fornitori terzi.',
    ],
  },
  {
    title: '8. Pagamenti, fatturazione e rimborsi',
    body: [
      'Prezzi, modalità di pagamento, scadenze e condizioni economiche vengono comunicati prima dell’avvio del servizio o indicati nella proposta commerciale applicabile.',
      'Modifiche future, supporto continuativo, più workflow, più Sheet, più account Brevo o logiche custom avanzate possono essere quotati separatamente.',
      'È possibile passare da Self-Setup a Guided Setup pagando la differenza, se confermato dal fornitore.',
      'RowsToCRM non promette supporto illimitato, aggiornamenti gratuiti perpetui o risultati commerciali garantiti.',
      '[POLICY RIMBORSI]',
    ],
  },
  {
    title: '9. Proprietà intellettuale',
    body: [
      'Testi, layout, materiali, configurazioni, documentazione e contenuti del sito RowsToCRM sono protetti dalle norme applicabili in materia di proprietà intellettuale, salvo diversa indicazione.',
      'L’utente conserva la titolarità dei propri dati e materiali. RowsToCRM può utilizzare informazioni tecniche e operative solo nei limiti necessari a fornire il servizio richiesto.',
    ],
  },
  {
    title: '10. Limitazioni di responsabilità',
    body: [
      'Il sito e i servizi sono forniti con un approccio professionale e ragionevolmente diligente, ma non viene garantito che siano privi di errori, interruzioni o incompatibilità future con servizi terzi.',
      'Nei limiti consentiti dalla legge applicabile, RowsToCRM non risponde di perdite indirette, mancati profitti, perdita di dati, interruzioni operative o danni derivanti da dati errati, configurazioni esterne, credenziali non corrette o indisponibilità di servizi terzi.',
    ],
  },
  {
    title: '11. Privacy',
    body: [
      <>
        Il trattamento dei dati personali è descritto nell’Informativa Privacy disponibile alla pagina{' '}
        <a className={linkClass} href="/privacy">
          {siteUrl}/privacy
        </a>
        .
      </>,
    ],
  },
  {
    title: '12. Legge applicabile e foro competente',
    body: [
      'I presenti Termini sono regolati dalla legge di [GIURISDIZIONE].',
      'Per eventuali controversie sarà competente il foro di [FORO COMPETENTE], salvo norme inderogabili applicabili a consumatori o altri soggetti tutelati dalla legge.',
    ],
  },
  {
    title: '13. Modifiche ai Termini',
    body: [
      'RowsToCRM può aggiornare questi Termini per riflettere modifiche normative, tecniche o operative. La versione pubblicata su questa pagina è quella applicabile dalla data indicata.',
    ],
  },
];

export function TermsAndConditions() {
  return (
    <main className="bg-gradient-to-b from-emerald-50 to-white px-4 py-14 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-4xl rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm [overflow-wrap:anywhere] sm:p-10">
        <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#446362]">
          RowsToCRM
        </p>

        <h1 className="mb-4 text-3xl font-bold text-slate-950 sm:text-4xl">Termini e Condizioni</h1>
        <p className="mb-3 text-lg leading-relaxed text-slate-600">
          Termini e Condizioni di RowsToCRM per l’utilizzo del sito, la prenotazione delle demo, il setup del servizio, le responsabilità
          dell’utente, i servizi terzi, i pagamenti, le limitazioni e i contatti.
        </p>
        <p className="mb-8 text-sm font-semibold text-slate-500">Data di efficacia: [DATA DI EFFICACIA]</p>

        <div className="space-y-8">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">{section.title}</h2>
              <div className="space-y-3 text-base leading-relaxed text-slate-700">
                {section.body.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
