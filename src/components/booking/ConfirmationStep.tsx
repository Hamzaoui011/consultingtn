import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle, Gift, User, Mail, Phone } from 'lucide-react';
import { format } from 'date-fns';
import { fr, ar, enUS } from 'date-fns/locale';
import { Language } from '@/lib/i18n';

const locales = { fr, ar, en: enUS };

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const ConfirmationStep = () => {
  const { t, language, direction } = useLanguage();
  const { bookingData, setStep } = useBooking();

  const serviceNames: Record<string, Record<Language, string>> = {
    metaAds: { fr: 'Stratégie Meta Ads', ar: 'استراتيجية Meta Ads', en: 'Meta Ads Strategy' },
    googleAds: { fr: 'Stratégie Google Ads', ar: 'استراتيجية Google Ads', en: 'Google Ads Strategy' },
    socialMedia: { fr: 'Stratégie Social Media', ar: 'استراتيجية وسائل التواصل', en: 'Social Media Strategy' },
    ecommerce: { fr: 'Stratégie E-commerce', ar: 'استراتيجية التجارة الإلكترونية', en: 'E-commerce Strategy' },
    branding: { fr: 'Stratégie de Marque', ar: 'استراتيجية العلامة التجارية', en: 'Brand Strategy' },
    audit: { fr: 'Audit Marketing', ar: 'تدقيق التسويق', en: 'Marketing Audit' },
  };

  const serviceName = serviceNames[bookingData.service]?.[language] || bookingData.service;
  const formattedDate = bookingData.date 
    ? format(bookingData.date, 'EEEE, d MMMM yyyy', { locale: locales[language] })
    : '';

  const handleWhatsAppRedirect = () => {
    if (!bookingData.date) return;

    // Build the pre-filled WhatsApp message
    const messageLines = [
      `📋 *${language === 'ar' ? 'طلب حجز جديد' : language === 'en' ? 'New Booking Request' : 'Nouvelle demande de réservation'}*`,
      '',
      `🎯 *${t.service}:* ${serviceName}`,
      `📅 *${t.date}:* ${formattedDate}`,
      `🕐 *${t.time}:* ${bookingData.time} (${t.duration})`,
      '',
      `👤 *${t.fullName}:* ${bookingData.fullName}`,
      `📧 *${t.email}:* ${bookingData.email}`,
      `📱 *${t.phone}:* ${bookingData.phone}`,
    ];

    const message = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/21655566629?text=${encodedMessage}`;

    // Open WhatsApp in a new tab (works on both mobile and desktop)
    window.open(whatsappUrl, '_blank');
  };

  const BackIcon = direction === 'rtl' ? ArrowRight : ArrowLeft;

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setStep(4)}
          className="shrink-0"
        >
          <BackIcon className="h-5 w-5" />
        </Button>
        <h2 className="text-2xl font-bold">{t.bookingDetails}</h2>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Summary Card */}
        <div className="glass-card rounded-xl p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
              <CheckCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t.service}</p>
              <p className="font-semibold">{serviceName}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t.date}</p>
              <p className="font-semibold">{formattedDate}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t.time}</p>
              <p className="font-semibold">{bookingData.time} ({t.duration})</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <Gift className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t.freeAudit}</p>
              <p className="font-bold text-xl gradient-text-gold">{t.duration}</p>
            </div>
          </div>
        </div>

        {/* Client Info */}
        <div className="glass-card rounded-xl p-6 space-y-3">
          <p className="text-sm text-muted-foreground mb-2">{t.yourInfo}</p>
          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <p className="font-semibold">{bookingData.fullName}</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <p className="text-muted-foreground">{bookingData.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <p className="text-muted-foreground">{bookingData.phone}</p>
          </div>
        </div>

        {/* WhatsApp CTA Button */}
        <Button 
          onClick={handleWhatsAppRedirect}
          className="w-full h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg gap-3 shadow-lg hover:shadow-xl transition-all"
        >
          <WhatsAppIcon className="h-6 w-6" />
          {t.confirm}
        </Button>
      </div>
    </div>
  );
};
