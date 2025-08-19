import { Lightbulb, Target, Users, Play, BarChart3 } from 'lucide-react';

interface HowWeWorkSectionProps {
  lang: 'ar' | 'en';
}

const HowWeWorkSection = ({ lang }: HowWeWorkSectionProps) => {
  const content = {
    ar: {
      title: "كيف نشتغل؟",
      tagline: "أنت مرتاح… وحنا نشيل الشغل كله",
      steps: [
        "نفهم براندك وأهدافك بالتفصيل",
        "نطلع لك أفكار إبداعية لحملتك",
        "نحسن الفكرة ونطورها لتلامس جمهورك",
        "نضع استراتيجية شاملة للحملة",
        "نحدد الشريحة المستهدفة بدقة",
        "نرشح المؤثر الأنسب لحملتك",
        "نحدد أفضل وقت لإطلاق الحملة",
        "نجهز الخطة النهائية ونرسلها لك للموافقة",
        "نبدأ التنفيذ بعد موافقتك",
        "نتابع الحملة ميدانيًا لحظة بلحظة",
        "نقدم تقرير مفصل بعد الحملة"
      ]
    },
    en: {
      title: "How We Work",
      tagline: "You relax… we handle everything",
      steps: [
        "Understand your brand & goals thoroughly",
        "Generate creative ideas for your campaign",
        "Enhance and develop the idea to touch your audience",
        "Create a comprehensive campaign strategy",
        "Select the target audience precisely",
        "Choose the right influencer for your campaign",
        "Pick the best campaign timing",
        "Prepare the final strategy for your approval",
        "Launch after your approval",
        "Monitor & manage on-ground",
        "Deliver a detailed post-campaign report"
      ]
    }
  };

  const t = content[lang];

  return (
    <section
      className="py-20 bg-white"
      id="how-we-work"
    >
      <div className={`raj-container ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Play className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-up">
              {t.title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t.tagline}
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.steps.map((step, index) => (
              <div
                key={index}
                className="bg-secondary rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow Visual */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-raj-orange" />
              <span className="text-sm font-medium text-muted-foreground">
                {lang === 'ar' ? 'الأفكار' : 'Ideas'}
              </span>
            </div>
            <div className="w-8 h-0.5 bg-raj-orange"></div>
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-raj-blue" />
              <span className="text-sm font-medium text-muted-foreground">
                {lang === 'ar' ? 'الاستراتيجية' : 'Strategy'}
              </span>
            </div>
            <div className="w-8 h-0.5 bg-raj-blue"></div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-raj-teal" />
              <span className="text-sm font-medium text-muted-foreground">
                {lang === 'ar' ? 'التنفيذ' : 'Execution'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;