import { Heart, Lightbulb, Users, MessageCircle } from 'lucide-react';

interface WhyChooseSectionProps {
  lang: 'ar' | 'en';
}

const WhyChooseSection = ({ lang }: WhyChooseSectionProps) => {
  const content = {
    ar: {
      title: "ليش تختار راج؟",
      cards: [
        {
          icon: Heart,
          title: "ثقة وذكاء… صنعت فرق",
          description: "خبرة متراكمة في صناعة النجاحات"
        },
        {
          icon: Lightbulb,
          title: "أفكار جديدة في كل حملة", 
          description: "إبداع مستمر يميز براندك عن المنافسين"
        },
        {
          icon: Users,
          title: "نشتغل وكأننا جزء من فريقك",
          description: "شراكة حقيقية لتحقيق أهدافك"
        },
        {
          icon: MessageCircle,
          title: "نخلق شعور ونخلي الناس تتكلم",
          description: "محتوى يثير المشاعر ويحرك المجتمع"
        }
      ]
    },
    en: {
      title: "Why Choose Raj?",
      cards: [
        {
          icon: Heart,
          title: "Trust & Intelligence That Makes a Difference",
          description: "Accumulated experience in creating successes"
        },
        {
          icon: Lightbulb,
          title: "Fresh, unique ideas for every campaign",
          description: "Continuous creativity that sets your brand apart"
        },
        {
          icon: Users,
          title: "We work as part of your team",
          description: "True partnership to achieve your goals"
        },
        {
          icon: MessageCircle,
          title: "We create emotions and get people talking",
          description: "Content that stirs emotions and moves communities"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-20 bg-secondary">
      <div className={`raj-container ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 animate-fade-up">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.cards.map((card, index) => {
            const IconComponent = card.icon;
            const colors = ['raj-blue', 'raj-orange', 'raj-teal', 'raj-blue'];
            const currentColor = colors[index % colors.length];
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl raj-transition text-center group animate-fade-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={`w-16 h-16 bg-${currentColor}/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-${currentColor} group-hover:scale-110 raj-transition`}>
                  <IconComponent className={`w-8 h-8 text-${currentColor} group-hover:text-white raj-transition`} />
                </div>
                <h3 className={`text-xl font-bold text-${currentColor} mb-4`}>
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;