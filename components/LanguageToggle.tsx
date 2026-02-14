'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ur' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="rounded-full border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-500 transition-all text-xs font-bold px-4 h-8"
    >
      {i18n.language === 'en' ? 'اردو' : 'English'}
    </Button>
  );
}
