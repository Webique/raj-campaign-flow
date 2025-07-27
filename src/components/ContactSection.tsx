import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Phone, Instagram, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  lang: 'ar' | 'en';
}

const ContactSection = ({ lang }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: ''
  });
  
  const { toast } = useToast();

  const content = {
    ar: {
      title: "تبغى تطلق حملة لها صوت؟",
      subtitle: "خل راج يمسكها لك من الألف للياء",
      form: {
        name: "الاسم",
        email: "الإيميل",
        phone: "رقم الجوال",
        goal: "هدف الحملة",
        submit: "ابدأ حملتك"
      },
      contact: {
        phone: "+966 55 000 0000",
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
      subtitle: "Let Raj handle it from A to Z",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        goal: "Campaign Goal",
        submit: "Start Campaign"
      },
      contact: {
        phone: "+966 55 000 0000",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: lang === 'ar' ? "تم إرسال الرسالة" : "Message Sent",
      description: lang === 'ar' ? "سنتواصل معك قريباً" : "We'll contact you soon",
    });
    setFormData({ name: '', email: '', phone: '', goal: '' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/966550000000', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
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
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div id="contact-form" className="animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t.form.name}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t.form.email}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                />
              </div>
              <div>
                <Input
                  placeholder={t.form.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t.form.goal}
                  value={formData.goal}
                  onChange={(e) => setFormData({...formData, goal: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70 min-h-[120px]"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                {t.form.submit}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-right">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{lang === 'ar' ? 'هاتف' : 'Phone'}</h4>
                  <p className="opacity-90">{t.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t.contact.whatsapp}</h4>
                  <p className="opacity-90">{t.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Instagram</h4>
                  <p className="opacity-90">@rajsaudi</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{lang === 'ar' ? 'موقع إلكتروني' : 'Website'}</h4>
                  <p className="opacity-90">{t.contact.website}</p>
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