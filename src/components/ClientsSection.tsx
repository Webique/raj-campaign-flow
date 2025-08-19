import { Users, Target, TrendingUp } from 'lucide-react';

interface ClientsSectionProps {
  lang: 'ar' | 'en';
}

const ClientsSection = ({ lang }: ClientsSectionProps) => {
  const content = {
    ar: {
      title: "عملاؤنا المميزون",
      subtitle: "نفخر بشراكتنا في تنفيذ حملات إعلانية ناجحة مع أبرز العلامات التجارية في المملكة",
      stats: {
        campaigns: "حملة إعلانية",
        success: "معدل نجاح",
        reach: "وصول"
      }
    },
    en: {
      title: "Our Distinguished Clients",
      subtitle: "We're proud to partner in executing successful advertising campaigns with leading brands across the Kingdom",
      stats: {
        campaigns: "Advertising Campaigns",
        success: "Success Rate",
        reach: "Reach"
      }
    }
  };

  const t = content[lang];

  return (
    <section className="py-20 bg-gray-50">
      <div className={`raj-container ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-up">
              {t.title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Stats Row */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-raj-blue/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-raj-blue" />
              </div>
              <div className="text-3xl font-bold text-raj-blue mb-2">150+</div>
              <div className="text-muted-foreground">{t.stats.campaigns}</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-raj-orange/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-raj-orange" />
              </div>
              <div className="text-3xl font-bold text-raj-orange mb-2">98%</div>
              <div className="text-muted-foreground">{t.stats.success}</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 bg-raj-teal/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-raj-teal" />
              </div>
              <div className="text-3xl font-bold text-raj-teal mb-2">50M+</div>
              <div className="text-muted-foreground">{t.stats.reach}</div>
            </div>
          </div>
        </div>

        {/* Clients Logo Grid */}
        <div className="max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <img 
              src="/clients.png" 
              alt="Raj Agency Clients" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection; 