import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  lang: 'ar' | 'en';
  onLanguageChange: (lang: 'ar' | 'en') => void;
}

const Header = ({ lang, onLanguageChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className={`raj-container ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7ecb9e27-98c5-4bbb-8682-f4a788b68fc4.png" 
              alt="Raj Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Navigation & Controls */}
          <div className="flex items-center gap-4">
            <LanguageToggle currentLang={lang} onLanguageChange={onLanguageChange} />
            <Button
              onClick={scrollToContact}
              className={`font-semibold ${
                isScrolled 
                  ? 'bg-raj-orange text-white hover:bg-raj-orange/90' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              {lang === 'ar' ? 'ابدأ حملتك' : 'Start Campaign'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;