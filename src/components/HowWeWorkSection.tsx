import { CheckCircle } from 'lucide-react';

interface HowWeWorkSectionProps {
  lang: 'ar' | 'en';
}

const HowWeWorkSection = ({ lang }: HowWeWorkSectionProps) => {
  const content = {
    ar: {
      title: "كيف نشتغل؟",
      tagline: "أنت مرتاح… وحنا نشيل الشغل كله",
      steps: [
        "نأخذ كل تفاصيل البراند والهدف",
        "نراجع المنتج ونقترح تحسينات لو احتاج",
        "نحدد الفكرة والتوجه الإبداعي", 
        "نحط ميزانية مناسبة وخطة تنفيذ واضحة",
        "نختار الشريحة المستهدفة بعناية",
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
        "Review and improve your product if needed",
        "Define the creative idea & direction",
        "Set a suitable budget & execution plan",
        "Select the target audience precisely",
        "Choose the right influencer",
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
    <section className="py-20 bg-background">
      <div className={`raj-container ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 animate-fade-up">
            {t.title}
          </h2>
          <p className="text-xl text-primary font-semibold animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t.tagline}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {t.steps.map((step, index) => {
              const colors = ['raj-blue', 'raj-orange', 'raj-teal'];
              const currentColor = colors[index % colors.length];
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-md raj-transition-fast animate-fade-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 bg-${currentColor} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-foreground">
                      {step}
                    </p>
                  </div>
                  <CheckCircle className={`w-6 h-6 text-${currentColor} flex-shrink-0`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;