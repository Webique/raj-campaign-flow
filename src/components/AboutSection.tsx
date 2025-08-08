interface AboutSectionProps {
  lang: 'ar' | 'en';
}

const AboutSection = ({ lang }: AboutSectionProps) => {
  const content = {
    ar: {
      title: "نعيش مع براندك من أول لحظة",
      description: "نبدأ من الاسم، الشكل، الألوان، والتغليف… ونوصل لمرحلة كيف يشوفك العميل ويتقبلك ويحبك. هدفنا دائمًا خلق قصة وشعور يخلي الناس تتكلم عنك."
    },
    en: {
      title: "We Live With Your Brand From Day One",
      description: "We handle everything – from naming, design, colors, and packaging – to ensuring customers see, accept, and love your brand. Our mission? To create a story and emotion that gets people talking."
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
        </div>
        
        {/* Visual Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-20 h-20 bg-raj-blue rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-raj-blue">
              {lang === 'ar' ? 'هوية العلامة' : 'Brand Identity'}
            </h3>
            <p className="text-muted-foreground">
              {lang === 'ar' ? 'تصميم شامل يعكس شخصية براندك' : 'Complete design that reflects your brand personality'}
            </p>
          </div>
          
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-20 h-20 bg-raj-orange rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-raj-orange">
              {lang === 'ar' ? 'استراتيجية المحتوى' : 'Content Strategy'}
            </h3>
            <p className="text-muted-foreground">
              {lang === 'ar' ? 'محتوى يلامس مشاعر جمهورك' : 'Content that touches your audience emotions'}
            </p>
          </div>
          
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="w-20 h-20 bg-raj-teal rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-raj-teal">
              {lang === 'ar' ? 'تنفيذ الحملات' : 'Campaign Execution'}
            </h3>
            <p className="text-muted-foreground">
              {lang === 'ar' ? 'تنفيذ احترافي يحقق النتائج' : 'Professional execution that delivers results'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;