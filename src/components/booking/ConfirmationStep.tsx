import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Clock, CreditCard, CheckCircle, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { fr, ar, enUS } from 'date-fns/locale';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { ConfirmationModal } from './ConfirmationModal';
import { Language } from '@/lib/i18n';

const locales = { fr, ar, en: enUS };

export const ConfirmationStep = () => {
  const { t, language, direction } = useLanguage();
  const { bookingData, setStep, resetBooking } = useBooking();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const handleConfirm = async () => {
    if (!bookingData.date) return;

    setLoading(true);
    
    try {
      const dateStr = format(bookingData.date, 'yyyy-MM-dd');
      
      // Insert booking
      const { error: insertError } = await supabase
        .from('bookings')
        .insert({
          service: bookingData.service,
          booking_date: dateStr,
          booking_time: bookingData.time + ':00',
          full_name: bookingData.fullName,
          email: bookingData.email,
          phone: bookingData.phone,
          price: 50.00,
          duration: 45
        });

      if (insertError) {
        if (insertError.code === '23505') {
          toast({
            title: t.slotTaken,
            variant: 'destructive'
          });
          setStep(3);
          return;
        }
        throw insertError;
      }

      // Send email notification
      await supabase.functions.invoke('send-booking-notification', {
        body: {
          service: serviceName,
          date: formattedDate,
          time: bookingData.time,
          fullName: bookingData.fullName,
          email: bookingData.email,
          phone: bookingData.phone,
          price: '50 DT',
          duration: '45 minutes'
        }
      });

      setShowModal(true);
    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: t.bookingError,
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetBooking();
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
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Prix</p>
              <p className="font-bold text-xl gradient-text-gold">{t.price}</p>
            </div>
          </div>
        </div>

        {/* Client Info */}
        <div className="glass-card rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-2">{t.yourInfo}</p>
          <p className="font-semibold">{bookingData.fullName}</p>
          <p className="text-muted-foreground">{bookingData.email}</p>
          <p className="text-muted-foreground">{bookingData.phone}</p>
        </div>

        <Button 
          onClick={handleConfirm}
          disabled={loading}
          className="w-full h-14 gradient-gold text-primary-foreground font-bold text-lg animate-pulse-gold"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin me-2" />
              ...
            </>
          ) : (
            t.confirm
          )}
        </Button>
      </div>

      <ConfirmationModal 
        isOpen={showModal}
        onClose={handleCloseModal}
        bookingData={{
          service: serviceName,
          date: formattedDate,
          time: bookingData.time
        }}
      />
    </div>
  );
};
