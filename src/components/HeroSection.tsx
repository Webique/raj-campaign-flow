import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video-thumbnail.jpg';

interface HeroSectionProps {
  lang: 'ar' | 'en';
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const content = {
    ar: {
      headline: "رواج حملتك يبدأ من راج",
      subheading: "نحكي قصة، نخلق شعور، ونوصل فكرتك بالطريقة الصح",
      cta: "ابدأ حملتك الآن",
      stats: {
        views: "88 مليون مشاهدة",
        influencers: "26 مؤثر",
        avgViews: "3.3 مليون متوسط المشاهدات"
      }
    },
    en: {
      headline: "The success of your campaign starts with Raj",
      subheading: "We tell stories, create emotions, and deliver your idea the right way",
      cta: "Start Your Campaign Now",
      stats: {
        views: "88M Total Views",
        influencers: "26 Influencers", 
        avgViews: "3.3M Avg Views"
      }
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
            {t.headline}
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t.subheading}
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg animate-fade-up"
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