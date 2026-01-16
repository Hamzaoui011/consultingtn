import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

// Available time slots (Africa/Tunis timezone - 9 AM to 6 PM)
const allTimeSlots = [
  '09:00', '09:45', '10:30', '11:15',
  '12:00', '14:00', '14:45', '15:30',
  '16:15', '17:00'
];

export const TimeSelector = () => {
  const { t, direction } = useLanguage();
  const { bookingData, updateBookingData, setStep } = useBooking();
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookedSlots = async () => {
      if (!bookingData.date) return;
      
      setLoading(true);
      const dateStr = format(bookingData.date, 'yyyy-MM-dd');
      
      const { data, error } = await supabase
        .from('bookings')
        .select('booking_time')
        .eq('booking_date', dateStr);

      if (!error && data) {
        setBookedSlots(data.map(b => b.booking_time.slice(0, 5)));
      }
      setLoading(false);
    };

    fetchBookedSlots();
  }, [bookingData.date]);

  const availableSlots = allTimeSlots.filter(slot => !bookedSlots.includes(slot));

  const handleTimeSelect = (time: string) => {
    updateBookingData({ time });
    setStep(4);
  };

  const BackIcon = direction === 'rtl' ? ArrowRight : ArrowLeft;

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setStep(2)}
          className="shrink-0"
        >
          <BackIcon className="h-5 w-5" />
        </Button>
        <h2 className="text-2xl font-bold">{t.selectTime}</h2>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="h-14 rounded-lg bg-secondary animate-pulse" 
            />
          ))}
        </div>
      ) : availableSlots.length === 0 ? (
        <div className="text-center py-12">
          <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">{t.noSlots}</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => setStep(2)}
          >
            {t.back}
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {availableSlots.map((time) => {
            const isSelected = bookingData.time === time;
            
            return (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={cn(
                  "glass-card rounded-lg p-4 text-center font-semibold transition-all duration-300",
                  "border-2 hover-lift",
                  isSelected 
                    ? "border-primary glow-gold" 
                    : "border-transparent hover:border-primary/50"
                )}
              >
                {time}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
