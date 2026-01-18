import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Gift, Star } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-28 pb-8 px-4">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-in">
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm font-medium">+500 clients satisfaits</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
          {t.heroTitle.split(' ').slice(0, 3).join(' ')}
          <span className="gradient-text-gold block mt-2">
            {t.heroTitle.split(' ').slice(3).join(' ')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
          {t.heroSubtitle}
        </p>

        {/* Info Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-2 border-primary glow-gold">
            <Gift className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg">{t.freeAudit}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-semibold">{t.duration}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
