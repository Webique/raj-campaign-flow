import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: 'ar' | 'en';
  onLanguageChange: (lang: 'ar' | 'en') => void;
}

const LanguageToggle = ({ currentLang, onLanguageChange }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLang === 'ar' ? 'en' : 'ar')}
      className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
    >
      <Globe className="w-4 h-4 mr-2" />
      {currentLang === 'ar' ? 'English' : 'عربي'}
    </Button>
  );
};

export default LanguageToggle;