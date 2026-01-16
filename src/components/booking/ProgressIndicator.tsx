import { useBooking } from '@/contexts/BookingContext';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const steps = [1, 2, 3, 4, 5];

export const ProgressIndicator = () => {
  const { step } = useBooking();

  return (
    <div className="flex items-center justify-center gap-2 py-6">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
              s < step 
                ? "gradient-gold text-primary-foreground" 
                : s === step 
                  ? "border-2 border-primary text-primary" 
                  : "border-2 border-muted text-muted-foreground"
            )}
          >
            {s < step ? <Check className="h-4 w-4" /> : s}
          </div>
          {i < steps.length - 1 && (
            <div 
              className={cn(
                "w-8 h-0.5 mx-1 transition-colors duration-300",
                s < step ? "bg-primary" : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};
