import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, ArrowRight, User, Mail, Phone } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const createSchema = (t: { required: string; invalidEmail: string; invalidPhone: string }) => z.object({
  fullName: z.string().trim().min(1, t.required).max(100, 'Name too long'),
  email: z.string().trim().email(t.invalidEmail).max(255, 'Email too long'),
  phone: z.string().trim().min(8, t.invalidPhone).max(20, t.invalidPhone)
    .regex(/^[+]?[\d\s-]{8,20}$/, t.invalidPhone),
});

export const PersonalInfoForm = () => {
  const { t, direction } = useLanguage();
  const { bookingData, updateBookingData, setStep } = useBooking();

  const schema = createSchema(t);
  type FormData = z.infer<typeof schema>;

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: bookingData.fullName,
      email: bookingData.email,
      phone: bookingData.phone,
    },
  });

  const onSubmit = (data: FormData) => {
    updateBookingData(data);
    setStep(5);
  };

  const BackIcon = direction === 'rtl' ? ArrowRight : ArrowLeft;
  const ContinueIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setStep(3)}
          className="shrink-0"
        >
          <BackIcon className="h-5 w-5" />
        </Button>
        <h2 className="text-2xl font-bold">{t.yourInfo}</h2>
      </div>

      <div className="max-w-md mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {t.fullName}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="glass-card border-2 focus:border-primary h-12"
                      placeholder="Hamzaoui Mohamed Yassine"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {t.email}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="email"
                      className="glass-card border-2 focus:border-primary h-12"
                      placeholder="email@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {t.phone}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="tel"
                      className="glass-card border-2 focus:border-primary h-12"
                      placeholder="+216 XX XXX XXX"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full h-12 gradient-gold text-primary-foreground font-bold text-lg"
            >
              {t.continue}
              <ContinueIcon className="h-5 w-5 ms-2" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
