import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { addDays, isBefore, startOfDay } from 'date-fns';

export const DateSelector = () => {
  const { t, direction } = useLanguage();
  const { bookingData, updateBookingData, setStep } = useBooking();

  // Disable past dates and weekends (optional - can be removed)
  const disabledDays = useMemo(() => {
    const today = startOfDay(new Date());
    return { before: today };
  }, []);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      updateBookingData({ date, time: '' });
      setStep(3);
    }
  };

  const BackIcon = direction === 'rtl' ? ArrowRight : ArrowLeft;

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setStep(1)}
          className="shrink-0"
        >
          <BackIcon className="h-5 w-5" />
        </Button>
        <h2 className="text-2xl font-bold">{t.selectDate}</h2>
      </div>

      <div className="flex justify-center">
        <div className="glass-card rounded-xl p-6 inline-block">
          <Calendar
            mode="single"
            selected={bookingData.date || undefined}
            onSelect={handleDateSelect}
            disabled={disabledDays}
            className="rounded-md"
            fromDate={new Date()}
            toDate={addDays(new Date(), 60)}
          />
        </div>
      </div>
    </div>
  );
};
