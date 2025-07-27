import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import SuccessStorySection from '@/components/SuccessStorySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('en');

  // Apply RTL/LTR to document
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.body.className = lang === 'ar' ? 'font-arabic' : 'font-english';
  }, [lang]);

  const handleLanguageChange = (newLang: 'ar' | 'en') => {
    setLang(newLang);
  };

  return (
    <div className="min-h-screen">
      <Header lang={lang} onLanguageChange={handleLanguageChange} />
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <HowWeWorkSection lang={lang} />
      <WhyChooseSection lang={lang} />
      <SuccessStorySection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
