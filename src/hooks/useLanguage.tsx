import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types/item';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: { en: string; es: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('marketplace-language');
    if (saved === 'en' || saved === 'es') return saved;
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('marketplace-language', language);
  }, [language]);

  const t = (text: { en: string; es: string }) => text[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageState, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
