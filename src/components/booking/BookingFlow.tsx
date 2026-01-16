import { useBooking } from '@/contexts/BookingContext';
import { ServiceSelector } from './ServiceSelector';
import { DateSelector } from './DateSelector';
import { TimeSelector } from './TimeSelector';
import { PersonalInfoForm } from './PersonalInfoForm';
import { ConfirmationStep } from './ConfirmationStep';

export const BookingFlow = () => {
  const { step } = useBooking();

  return (
    <div className="min-h-[60vh] py-8">
      {step === 1 && <ServiceSelector />}
      {step === 2 && <DateSelector />}
      {step === 3 && <TimeSelector />}
      {step === 4 && <PersonalInfoForm />}
      {step === 5 && <ConfirmationStep />}
    </div>
  );
};
