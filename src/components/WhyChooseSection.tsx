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
          description: "خبرة متراكمة في صناعة النجاحات الإعلانية"
        },
        {
          icon: Lightbulb,
          title: "أفكار جديدة في كل حملة", 
          description: "إبداع مستمر يميز حملتك عن المنافسين"
        },
        {
          icon: Users,
          title: "نشتغل وكأننا جزء من فريقك",
          description: "شراكة حقيقية لتحقيق أهداف حملتك"
        },
        {
          icon: MessageCircle,
          title: "نخلق شعور ونخلي الناس تتكلم",
          description: "حملات تثير المشاعر وتحرك المجتمع"
        }
      ]
    },
    en: {
      title: "Why Choose Raj?",
      cards: [
        {
          icon: Heart,
          title: "Trust & Intelligence That Makes a Difference",
          description: "Accumulated experience in creating advertising successes"
        },
        {
          icon: Lightbulb,
          title: "Fresh, unique ideas for every campaign",
          description: "Continuous creativity that sets your campaign apart"
        },
        {
          icon: Users,
          title: "We work as part of your team",
          description: "True partnership to achieve your campaign goals"
        },
        {
          icon: MessageCircle,
          title: "We create emotions and get people talking",
          description: "Campaigns that stir emotions and move communities"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-20 bg-secondary">
      <div className={`raj-container ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-up">
            {t.title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group animate-fade-up border border-border/50"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;