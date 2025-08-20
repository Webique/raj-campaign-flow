import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video-thumbnail.jpg';

interface HeroSectionProps {
  lang: 'ar' | 'en';
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const content = {
    ar: {
      headline: "رواج حملتك يبدأ من راج",
      subheading: "نحكي قصة، نخلق شعور، وننفذ حملتك الإعلانية",
      description: "نحن مسؤولون عن إضفاء الشهرة على فكرتك، وقد أصبحنا معروفين بأفكارنا العميقة والإبداعية",
      cta: "ابدأ حملتك الآن"
    },
    en: {
      headline: "The success of your campaign starts with Raj",
      subheading: "We tell stories, create emotions, and execute your advertising campaign",
      description: "We are responsible for giving your idea popularity, and we've become known for our deep and creative ideas",
      cta: "Start Your Campaign Now"
    }
  };

  const t = content[lang];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroVideo}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 raj-container text-center text-white ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-up">
            {t.headline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t.subheading}
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-80 animate-fade-up leading-relaxed max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
            {t.description}
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-raj-orange text-white hover:bg-raj-orange/90 font-semibold px-10 py-6 text-xl animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;