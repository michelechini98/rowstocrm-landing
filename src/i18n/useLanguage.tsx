import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { Language, translations } from './translations';

const STORAGE_KEY = 'rowstocrm-language';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  const requested = new URLSearchParams(window.location.search).get('lang');
  if (requested === 'en' || requested === 'it') return requested;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'it') return stored;

  return window.navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return value;
}
