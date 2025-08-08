import { Button } from '@/components/ui/button';
import { Play, Eye, Heart, MessageSquare, Share } from 'lucide-react';

interface SuccessStorySectionProps {
  lang: 'ar' | 'en';
}

const SuccessStorySection = ({ lang }: SuccessStorySectionProps) => {
  const content = {
    ar: {
      title: "قصة نجاح",
      campaign: "حملة اليوم الوطني 94",
      description: "التحدي كان إطلاق حملة وطنية تخلق تفاعل حقيقي، مو بس مشاهدات. ركزنا على المؤثرين المناسبين، وصنعنا محتوى يخاطب المشاعر الوطنية بشكل مباشر، والنتيجة كانت أرقام قياسية وانتشار واسع.",
      watchButton: "شاهد الحملة",
      metrics: {
        influencers: "مؤثر",
        views: "مشاهدة",
        watches: "مشاهدة",
        likes: "إعجاب", 
        comments: "تعليق",
        shares: "مشاركة"
      }
    },
    en: {
      title: "Success Story",
      campaign: "National Day Campaign 94",
      description: "The challenge was to launch a National Day campaign that created real engagement, not just views. By selecting the right influencers and crafting emotionally resonant content, we achieved record-breaking reach and impact.",
      watchButton: "Watch Campaign",
      metrics: {
        influencers: "Influencers",
        views: "Total Views",
        watches: "Watches",
        likes: "Likes",
        comments: "Comments", 
        shares: "Shares"
      }
    }
  };

  const t = content[lang];

  const stats = [
    { value: "26", label: t.metrics.influencers, icon: Eye },
    { value: "88M", label: t.metrics.views, icon: Eye },
    { value: "11.5M", label: t.metrics.watches, icon: Play },
    { value: "10,984", label: t.metrics.likes, icon: Heart },
    { value: "2,367", label: t.metrics.comments, icon: MessageSquare },
    { value: "2,531", label: t.metrics.shares, icon: Share }
  ];

  return (
    <section className="py-20 bg-background">
      <div className={`raj-container ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-raj-blue mb-8 animate-fade-up">
            {t.title}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Campaign Video/Image */}
            <div className="animate-fade-up">
              <div className="relative bg-gradient-to-br from-raj-blue to-raj-orange rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-raj-blue/20 to-raj-orange/40 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Play className="w-6 h-6 mr-2" />
                    {t.watchButton}
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-raj-blue font-semibold text-sm">{t.campaign}</span>
                </div>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="animate-slide-right">
              <h3 className="text-2xl md:text-3xl font-bold text-raj-teal mb-6">
                {t.campaign}
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {t.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  const colors = ['raj-blue', 'raj-orange', 'raj-teal'];
                  const currentColor = colors[index % colors.length];
                  return (
                    <div key={index} className="text-center">
                      <div className={`w-12 h-12 bg-${currentColor}/10 rounded-2xl mx-auto mb-3 flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 text-${currentColor}`} />
                      </div>
                      <div className={`text-2xl font-bold text-${currentColor} mb-1`}>{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;