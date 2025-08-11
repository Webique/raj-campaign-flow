import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: 'ar' | 'en';
  onLanguageChange: (lang: 'ar' | 'en') => void;
  isScrolled?: boolean;
}

const LanguageToggle = ({ currentLang, onLanguageChange, isScrolled = false }: LanguageToggleProps) => {
  const scrolledClasses = 'bg-white/90 text-raj-blue border-raj-blue/20 hover:bg-white';
  const defaultClasses = 'bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm';
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLang === 'ar' ? 'en' : 'ar')}
      className={isScrolled ? scrolledClasses : defaultClasses}
    >
      <Globe className="w-4 h-4 mr-2" />
      {currentLang === 'ar' ? 'English' : 'عربي'}
    </Button>
  );
};

export default LanguageToggle;