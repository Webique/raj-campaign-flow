import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  lang: 'ar' | 'en';
}

const ContactSection = ({ lang }: ContactSectionProps) => {
  const { toast } = useToast();

  const content = {
    ar: {
      title: "تبغى تطلق حملة لها صوت؟",
      subtitle: "خل راج يطلع لك الأفكار، يضع الاستراتيجية، وينفذ الحملة مع المؤثرين",
      contact: {
        phone: "+966 55 648 3990",
        whatsapp: "واتساب",
        website: "rajsaudi.com"
      },
      cta: {
        campaign: "ابدأ حملتك الآن",
        whatsapp: "تواصل واتساب"
      }
    },
    en: {
      title: "Want to launch a campaign that makes noise?",
      subtitle: "Let Raj generate ideas, create strategy, and execute your campaign with influencers",
      contact: {
        phone: "+966 55 648 3990",
        whatsapp: "WhatsApp",
        website: "rajsaudi.com"
      },
      cta: {
        campaign: "Start Campaign Now",
        whatsapp: "WhatsApp Chat"
      }
    }
  };

  const t = content[lang];

  const openWhatsApp = () => {
    window.open('https://wa.me/966556483990', '_blank');
  };

  const openPhone = () => {
    window.open('tel:+966556483990', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/rajsaudi', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-raj-orange text-white">
      <div className={`raj-container ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        {/* CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up">
            {t.title}
          </h2>
          <p className="text-xl opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              variant="secondary"
              className="font-semibold px-8"
              onClick={openWhatsApp}
            >
              {t.cta.campaign}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 font-semibold px-8"
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.cta.whatsapp}
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-right">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
                  onClick={openPhone}
                >
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{lang === 'ar' ? 'هاتف' : 'Phone'}</h4>
                  <p className="opacity-90">{t.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t.contact.whatsapp}</h4>
                  <p className="opacity-90">{t.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
                  onClick={openInstagram}
                >
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Instagram</h4>
                  <p className="opacity-90">@rajsaudi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;