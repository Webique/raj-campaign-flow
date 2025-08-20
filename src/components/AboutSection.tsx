import { Heart, Lightbulb, Users } from 'lucide-react';

interface AboutSectionProps {
  lang: 'ar' | 'en';
}

const AboutSection = ({ lang }: AboutSectionProps) => {
  const content = {
    ar: {
      title: "نطور براندك من خلال الحملات الإعلانية",
      description: "نبدأ من فهم فكرتك، نطورها ونحسنها، ثم ننفذ حملات إعلانية قوية تتضمن المؤثرين. هدفنا خلق قصة وشعور يخلي الناس تتكلم عنك.",
      perspective: "ان حنا ننظر بنظرة العميل + نوصل للفكرة اللي ترغّب العميل بالشراء بنسبة ١٠٠٪"
    },
    en: {
      title: "We Develop Your Brand Through Advertising Campaigns",
      description: "We start by understanding your idea, develop and improve it, then execute powerful advertising campaigns including influencers. Our mission? To create a story and emotion that gets people talking.",
      perspective: "Here, we look from the customer's perspective + we convey the idea that makes the customer 100% inclined to buy."
    }
  };

  const t = content[lang];

  return (
    <section className="py-20 bg-secondary">
      <div className={`raj-container ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 animate-fade-up">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t.description}
          </p>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed animate-fade-up font-semibold mt-6" style={{ animationDelay: '0.3s' }}>
            {t.perspective}
          </p>
        </div>
        
        {/* Visual Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-20 h-20 bg-raj-blue rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-raj-blue">
              {lang === 'ar' ? 'مفهوم العلامة' : 'Brand Concept'}
            </h3>
            <p className="text-muted-foreground">
              {lang === 'ar' ? 'نفهم فكرتك ونطورها لتعكس شخصية براندك' : 'We understand your idea and develop it to reflect your brand personality'}
            </p>
          </div>
          
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-20 h-20 bg-raj-orange rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-raj-orange">
              {lang === 'ar' ? 'الفكرة وتحسينها' : 'Idea & Enhancement'}
            </h3>
            <p className="text-muted-foreground">
              {lang === 'ar' ? 'نحسن فكرتك لتلامس مشاعر جمهورك' : 'We enhance your idea to touch your audience emotions'}
            </p>
          </div>
          
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="w-20 h-20 bg-raj-teal rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-raj-teal">
              {lang === 'ar' ? 'الحملات والمؤثرين' : 'Campaigns & Influencers'}
            </h3>
            <p className="text-muted-foreground">
              {lang === 'ar' ? 'ننفذ الحملات ونختار المؤثر الأنسب' : 'We execute campaigns and choose the right influencer'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;