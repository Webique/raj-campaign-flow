import { Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  lang: 'ar' | 'en';
}

const Footer = ({ lang }: FooterProps) => {
  const content = {
    ar: {
      copyright: "© 2025 وكالة راج. جميع الحقوق محفوظة",
      followUs: "تابعنا"
    },
    en: {
      copyright: "© 2025 Raj Agency. All rights reserved",
      followUs: "Follow Us"
    }
  };

  const t = content[lang];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className={`raj-container ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7ecb9e27-98c5-4bbb-8682-f4a788b68fc4.png" 
              alt="Raj Logo" 
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium">{t.followUs}:</span>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/rajsaudi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center raj-transition-fast"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/966556483990" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center raj-transition-fast"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/70 text-center md:text-right">
            {t.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;