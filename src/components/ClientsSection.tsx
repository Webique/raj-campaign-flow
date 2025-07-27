import { Users } from 'lucide-react';

interface ClientsSectionProps {
  lang: 'ar' | 'en';
}

const ClientsSection = ({ lang }: ClientsSectionProps) => {
  const content = {
    ar: {
      title: "عملاؤنا المميزون",
      subtitle: "نفخر بشراكتنا مع أبرز العلامات التجارية في المملكة"
    },
    en: {
      title: "Our Distinguished Clients",
      subtitle: "We're proud to partner with leading brands across the Kingdom"
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Clients Logo Grid */}
        <div className="max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
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