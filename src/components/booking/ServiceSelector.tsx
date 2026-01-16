import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';
import { cn } from '@/lib/utils';
import { 
  Target, 
  Search, 
  Share2, 
  ShoppingCart, 
  Palette, 
  BarChart3 
} from 'lucide-react';

const services = [
  { id: 'metaAds', icon: Target },
  { id: 'googleAds', icon: Search },
  { id: 'socialMedia', icon: Share2 },
  { id: 'ecommerce', icon: ShoppingCart },
  { id: 'branding', icon: Palette },
  { id: 'audit', icon: BarChart3 },
] as const;

type ServiceId = typeof services[number]['id'];

export const ServiceSelector = () => {
  const { t } = useLanguage();
  const { bookingData, updateBookingData, setStep } = useBooking();

  const handleSelect = (serviceId: string) => {
    updateBookingData({ service: serviceId });
    setStep(2);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-8">{t.selectService}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(({ id, icon: Icon }) => {
          const isSelected = bookingData.service === id;
          const serviceT = t.services[id as ServiceId];
          const serviceDescT = t.services[`${id}Desc` as keyof typeof t.services];
          
          return (
            <button
              key={id}
              onClick={() => handleSelect(id)}
              className={cn(
                "glass-card rounded-xl p-6 text-start transition-all duration-300 hover-lift group",
                "border-2",
                isSelected 
                  ? "border-primary glow-gold" 
                  : "border-transparent hover:border-primary/50"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
                isSelected 
                  ? "gradient-gold" 
                  : "bg-secondary group-hover:bg-primary/20"
              )}>
                <Icon className={cn(
                  "h-6 w-6",
                  isSelected ? "text-primary-foreground" : "text-primary"
                )} />
              </div>
              
              <h3 className="font-bold text-lg mb-2">{serviceT}</h3>
              <p className="text-muted-foreground text-sm">{serviceDescT}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
