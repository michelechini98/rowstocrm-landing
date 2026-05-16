import type { Language } from '../i18n/translations';

export type SeoLandingPageKey = 'googleSheetsToBrevo' | 'contactCompanyLinking' | 'zapierMakeAlternative';

export type SeoLandingPageContent = {
  path: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  problem: {
    title: string;
    body: string;
    bullets: string[];
  };
  solution: {
    title: string;
    body: string;
    bullets: string[];
  };
  example: {
    title: string;
    rowLabel: string;
    row: string[];
    outcomeTitle: string;
    outcomes: string[];
  };
  faq: Array<readonly [string, string]>;
  cta: {
    title: string;
    body: string;
    button: string;
  };
};

export const seoLandingPages: Record<SeoLandingPageKey, Record<Language, SeoLandingPageContent>> = {
  googleSheetsToBrevo: {
    en: {
      path: '/google-sheets-to-brevo',
      navLabel: 'Google Sheets to Brevo',
      title: 'Google Sheets to Brevo Workflow | RowsToCRM',
      description:
        'Create Brevo contacts, companies, contact-company links and list assignments from Google Sheets with row-level status tracking and safe retry.',
      h1: 'Google Sheets to Brevo workflow for reviewed lead rows',
      intro:
        'RowsToCRM helps marketing teams turn reviewed Google Sheets lead rows into complete Brevo records without building and maintaining automation scenarios.',
      problem: {
        title: 'Lead rows are useful only when Brevo receives structured records',
        body:
          'Forms, events, partner lists and manual checks often end in Google Sheets. The difficult part is turning those reviewed rows into contacts, companies, links and list assignments that operators can trust.',
        bullets: ['Manual imports lose row-level context', 'Company data is often separated from contact data', 'Errors are hard to review when the Sheet is not updated'],
      },
      solution: {
        title: 'A guided workflow from Sheet row to Brevo outcome',
        body:
          'RowsToCRM adds a guided sidebar inside Google Sheets so your team can map columns, create tracking fields, process ready rows and review DONE or ERROR statuses directly in the Sheet.',
        bullets: ['Create contacts and companies from the same row', 'Assign contacts to Brevo lists', 'Track READY, PROCESSING, DONE, ERROR and SKIPPED per row'],
      },
      example: {
        title: 'Example: one reviewed webinar row',
        rowLabel: 'Google Sheets row',
        row: ['marco@fieldline.example', 'Marco', 'Fieldline Studio', 'Webinar Leads'],
        outcomeTitle: 'Brevo outcome',
        outcomes: ['Contact created or updated', 'Company created or updated', 'Contact linked to company', 'Added to Webinar Leads', 'Sheet status written as DONE'],
      },
      faq: [
        ['Can RowsToCRM create Brevo contacts from Google Sheets?', 'Yes. Reviewed rows can create or update Brevo contacts using the mappings configured in the sidebar.'],
        ['Does it also handle companies?', 'Yes. RowsToCRM is designed to create or update companies and link contacts to them from the same row.'],
        ['Where do operators see the result?', 'The result is written back to Google Sheets with row-level statuses and useful error messages.'],
      ],
      cta: {
        title: 'Want to review your Google Sheets to Brevo workflow?',
        body: 'Book a short demo and see how a reviewed Sheet row becomes a complete Brevo record.',
        button: 'Book a 20-minute demo',
      },
    },
    it: {
      path: '/google-sheets-to-brevo',
      navLabel: 'Google Sheets a Brevo',
      title: 'Workflow Google Sheets Brevo | RowsToCRM',
      description:
        'Crea contatti Brevo, aziende, collegamenti contatto-azienda e assegnazioni a liste da Google Sheets con stati per riga e retry sicuro.',
      h1: 'Workflow Google Sheets Brevo per righe lead controllate',
      intro:
        'RowsToCRM aiuta i team marketing a trasformare righe lead controllate in Google Sheets in record Brevo completi, senza costruire e mantenere scenari di automazione.',
      problem: {
        title: 'Le righe lead servono davvero solo quando Brevo riceve record strutturati',
        body:
          'Form, eventi, liste partner e controlli manuali finiscono spesso in Google Sheets. La parte difficile è trasformare quelle righe controllate in contatti, aziende, collegamenti e liste che gli operatori possano verificare.',
        bullets: ['Gli import manuali perdono contesto per riga', 'I dati azienda sono spesso separati dai dati contatto', 'Gli errori sono difficili da analizzare se il foglio non viene aggiornato'],
      },
      solution: {
        title: 'Un workflow guidato dalla riga del foglio al risultato Brevo',
        body:
          'RowsToCRM aggiunge una sidebar guidata dentro Google Sheets per mappare colonne, creare campi di tracking, processare righe pronte e controllare stati DONE o ERROR direttamente nel foglio.',
        bullets: ['Crea contatti e aziende dalla stessa riga', 'Assegna contatti a liste Brevo', 'Traccia READY, PROCESSING, DONE, ERROR e SKIPPED per ogni riga'],
      },
      example: {
        title: 'Esempio: una riga webinar controllata',
        rowLabel: 'Riga Google Sheets',
        row: ['marco@fieldline.example', 'Marco', 'Fieldline Studio', 'Webinar Leads'],
        outcomeTitle: 'Risultato Brevo',
        outcomes: ['Contatto creato o aggiornato', 'Azienda creata o aggiornata', 'Contatto collegato all’azienda', 'Aggiunto a Webinar Leads', 'Stato nel foglio scritto come DONE'],
      },
      faq: [
        ['RowsToCRM può creare contatti Brevo da Google Sheets?', 'Sì. Le righe controllate possono creare o aggiornare contatti Brevo usando le mappature configurate nella sidebar.'],
        ['Gestisce anche le aziende?', 'Sì. RowsToCRM è pensato per creare o aggiornare aziende e collegare i contatti alle aziende dalla stessa riga.'],
        ['Dove vedono il risultato gli operatori?', 'Il risultato viene scritto in Google Sheets con stati per riga e messaggi di errore utili.'],
      ],
      cta: {
        title: 'Vuoi analizzare il tuo workflow Google Sheets Brevo?',
        body: 'Prenota una breve demo e guarda come una riga controllata diventa un record Brevo completo.',
        button: 'Prenota una demo di 20 minuti',
      },
    },
  },
  contactCompanyLinking: {
    en: {
      path: '/brevo-contact-company-linking',
      navLabel: 'Contact-company linking',
      title: 'Brevo Contact-Company Linking from Google Sheets | RowsToCRM',
      description:
        'Create or update Brevo contacts and companies from Google Sheets, link contacts to companies and track each processed row with DONE or ERROR status.',
      h1: 'Link Brevo contacts to companies from Google Sheets',
      intro:
        'RowsToCRM is built for teams that need more than an email import: each reviewed row can become a contact, a company and a visible contact-company relationship in Brevo.',
      problem: {
        title: 'Contact imports rarely solve company relationships',
        body:
          'Marketing and sales teams often need company context for segmentation, routing and reporting. When contacts and companies are handled separately, relationships become manual work.',
        bullets: ['Company creation can be missed during simple imports', 'Linking contacts to companies needs consistent fields', 'Failed relationship updates need a visible retry path'],
      },
      solution: {
        title: 'Contact and company logic in one guided row workflow',
        body:
          'RowsToCRM lets you map contact fields and company fields from Google Sheets, create or update both records, link them and write the processing result back to the Sheet.',
        bullets: ['Map contact and company fields side by side', 'Create or update Brevo companies', 'Review ERROR rows and retry safely after corrections'],
      },
      example: {
        title: 'Example: one row with a company field',
        rowLabel: 'Reviewed row',
        row: ['lea@brightpath.example', 'Lea', 'Brightpath Co', 'Partner'],
        outcomeTitle: 'Linked Brevo records',
        outcomes: ['Contact Lea created or updated', 'Company Brightpath Co created or updated', 'Contact-company link established', 'Row marked DONE with Brevo IDs'],
      },
      faq: [
        ['Can RowsToCRM link existing Brevo records?', 'RowsToCRM is designed to work with configured mappings so contacts and companies can be created or updated before linking.'],
        ['What happens if company data is missing?', 'The row can be marked ERROR with a message so the operator can fix the data and retry the row.'],
        ['Is this only for new contacts?', 'No. The workflow is designed around creating or updating records, depending on the configured Brevo setup.'],
      ],
      cta: {
        title: 'Need contact-company linking from your Sheet?',
        body: 'Book a demo to review your Brevo structure and the fields needed for reliable linking.',
        button: 'Book a 20-minute demo',
      },
    },
    it: {
      path: '/brevo-contact-company-linking',
      navLabel: 'Collegamento contatti-aziende',
      title: 'Collegare contatti e aziende Brevo da Google Sheets | RowsToCRM',
      description:
        'Crea o aggiorna contatti e aziende Brevo da Google Sheets, collega contatti ad aziende e traccia ogni riga processata con stato DONE o ERROR.',
      h1: 'Collega contatti Brevo ad aziende da Google Sheets',
      intro:
        'RowsToCRM è pensato per team che hanno bisogno di più di un import email: ogni riga controllata può diventare un contatto, un’azienda e una relazione visibile in Brevo.',
      problem: {
        title: 'Gli import contatti raramente risolvono le relazioni con le aziende',
        body:
          'Team marketing e sales hanno spesso bisogno del contesto aziendale per segmentazione, routing e report. Quando contatti e aziende sono gestiti separatamente, il collegamento diventa lavoro manuale.',
        bullets: ['La creazione azienda può mancare negli import semplici', 'Collegare contatti e aziende richiede campi coerenti', 'Gli errori di collegamento devono avere un retry visibile'],
      },
      solution: {
        title: 'Logica contatto e azienda nello stesso workflow guidato',
        body:
          'RowsToCRM ti permette di mappare campi contatto e campi azienda da Google Sheets, creare o aggiornare entrambi i record, collegarli e scrivere il risultato nel foglio.',
        bullets: ['Mappa campi contatto e azienda insieme', 'Crea o aggiorna aziende Brevo', 'Controlla righe ERROR e ritenta in sicurezza dopo le correzioni'],
      },
      example: {
        title: 'Esempio: una riga con campo azienda',
        rowLabel: 'Riga controllata',
        row: ['lea@brightpath.example', 'Lea', 'Brightpath Co', 'Partner'],
        outcomeTitle: 'Record Brevo collegati',
        outcomes: ['Contatto Lea creato o aggiornato', 'Azienda Brightpath Co creata o aggiornata', 'Collegamento contatto-azienda creato', 'Riga marcata DONE con ID Brevo'],
      },
      faq: [
        ['RowsToCRM può collegare record Brevo esistenti?', 'RowsToCRM lavora con mappature configurate per creare o aggiornare contatti e aziende prima del collegamento.'],
        ['Cosa succede se manca il dato azienda?', 'La riga può essere marcata ERROR con un messaggio, così l’operatore può correggere il dato e ritentare.'],
        ['Serve solo per nuovi contatti?', 'No. Il workflow è pensato per creare o aggiornare record, in base alla configurazione Brevo definita.'],
      ],
      cta: {
        title: 'Ti serve collegare contatti e aziende dal foglio?',
        body: 'Prenota una demo per analizzare la tua struttura Brevo e i campi necessari per un collegamento affidabile.',
        button: 'Prenota una demo di 20 minuti',
      },
    },
  },
  zapierMakeAlternative: {
    en: {
      path: '/zapier-make-alternative-for-brevo-sheets',
      navLabel: 'Zapier/Make alternative',
      title: 'Zapier or Make Alternative for Brevo + Google Sheets | RowsToCRM',
      description:
        'RowsToCRM is not a generic automation platform. It gives marketing teams a guided Google Sheets to Brevo workflow with company linking, row statuses and safe retry.',
      h1: 'A guided alternative to building Brevo scenarios in Zapier or Make',
      intro:
        'Zapier and Make are powerful platforms. RowsToCRM is different: it gives marketing operators a purpose-built Brevo lead intake workflow inside Google Sheets.',
      problem: {
        title: 'Scenario building is not always the best operator workflow',
        body:
          'When a marketing team only needs reviewed Sheet rows to become complete Brevo records, maintaining multi-step scenarios can add testing, ownership and retry work.',
        bullets: ['Someone must build and maintain the scenario', 'Company linking and retry behavior must be designed', 'Operators often leave the spreadsheet to understand what happened'],
      },
      solution: {
        title: 'RowsToCRM gives operators a guided Sheet-first path',
        body:
          'Instead of asking the team to maintain automation scenarios, RowsToCRM keeps mapping, checks, processing, error review and retry in a guided Google Sheets sidebar.',
        bullets: ['Purpose-built for Brevo lead intake', 'Contact + company + linking in one row', 'DONE and ERROR statuses stay visible in the Sheet'],
      },
      example: {
        title: 'Example: replacing a scenario with a guided row process',
        rowLabel: 'Prepared row',
        row: ['nina@summit.example', 'Nina', 'Summit Works', 'Event Leads'],
        outcomeTitle: 'Guided workflow result',
        outcomes: ['Operator reviews the row in Google Sheets', 'RowsToCRM processes contact, company, link and list', 'The Sheet shows DONE or ERROR without leaving the workspace'],
      },
      faq: [
        ['Is RowsToCRM a full replacement for Zapier or Make?', 'No. Zapier and Make are broad automation platforms. RowsToCRM is focused on Brevo lead intake from Google Sheets.'],
        ['When is RowsToCRM a better fit?', 'When marketing operators need a guided Sheet-based workflow with Brevo company linking, row statuses and safe retry.'],
        ['Can technical teams still use automation platforms?', 'Yes. RowsToCRM is for the specific lead intake workflow, not for replacing every automation use case.'],
      ],
      cta: {
        title: 'Want a guided Brevo workflow without building scenarios?',
        body: 'Book a demo to compare your current Sheet-to-Brevo process with a purpose-built workflow.',
        button: 'Book a 20-minute demo',
      },
    },
    it: {
      path: '/zapier-make-alternative-for-brevo-sheets',
      navLabel: 'Alternativa a Zapier/Make',
      title: 'Alternativa a Zapier o Make per Brevo + Google Sheets | RowsToCRM',
      description:
        'RowsToCRM non è una piattaforma di automazione generica. Offre ai team marketing un workflow guidato Google Sheets Brevo con collegamento aziende, stati per riga e retry sicuro.',
      h1: 'Un’alternativa guidata alla costruzione di scenari Brevo in Zapier o Make',
      intro:
        'Zapier e Make sono piattaforme potenti. RowsToCRM è diverso: offre agli operatori marketing un workflow Brevo verticale dentro Google Sheets.',
      problem: {
        title: 'Costruire scenari non è sempre il workflow migliore per gli operatori',
        body:
          'Quando un team marketing deve solo trasformare righe controllate in record Brevo completi, mantenere scenari multi-step può aggiungere test, ownership e lavoro di retry.',
        bullets: ['Qualcuno deve costruire e mantenere lo scenario', 'Collegamento aziende e retry devono essere progettati', 'Gli operatori spesso escono dal foglio per capire cosa è successo'],
      },
      solution: {
        title: 'RowsToCRM offre un percorso guidato centrato sul foglio',
        body:
          'Invece di chiedere al team di mantenere scenari di automazione, RowsToCRM mantiene mapping, controlli, processamento, revisione errori e retry in una sidebar guidata di Google Sheets.',
        bullets: ['Pensato per lead intake Brevo', 'Contatto + azienda + collegamento in una riga', 'Stati DONE e ERROR visibili nel foglio'],
      },
      example: {
        title: 'Esempio: sostituire uno scenario con un processo guidato per riga',
        rowLabel: 'Riga preparata',
        row: ['nina@summit.example', 'Nina', 'Summit Works', 'Event Leads'],
        outcomeTitle: 'Risultato del workflow guidato',
        outcomes: ['L’operatore controlla la riga in Google Sheets', 'RowsToCRM processa contatto, azienda, collegamento e lista', 'Il foglio mostra DONE o ERROR senza uscire dallo spazio di lavoro'],
      },
      faq: [
        ['RowsToCRM sostituisce completamente Zapier o Make?', 'No. Zapier e Make sono piattaforme di automazione ampie. RowsToCRM è focalizzato sul lead intake Brevo da Google Sheets.'],
        ['Quando RowsToCRM è più adatto?', 'Quando operatori marketing hanno bisogno di un workflow guidato nel foglio con collegamento aziende Brevo, stati per riga e retry sicuro.'],
        ['I team tecnici possono continuare a usare piattaforme di automazione?', 'Sì. RowsToCRM copre uno specifico workflow di lead intake, non sostituisce ogni caso di automazione.'],
      ],
      cta: {
        title: 'Vuoi un workflow Brevo guidato senza costruire scenari?',
        body: 'Prenota una demo per confrontare il tuo processo attuale Sheet-to-Brevo con un workflow verticale.',
        button: 'Prenota una demo di 20 minuti',
      },
    },
  },
};

export const seoLandingPageList = Object.values(seoLandingPages);

export function getSeoLandingPageByPath(pathname: string) {
  return seoLandingPageList.find((page) => page.en.path === pathname);
}
