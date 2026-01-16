import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Clock } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    service: string;
    date: string;
    time: string;
  };
}

export const ConfirmationModal = ({ isOpen, onClose, bookingData }: ConfirmationModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-2 border-primary/30 max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4">
            <img 
              src={logo} 
              alt="EL Marketeur TN" 
              className="h-16 w-auto mx-auto mb-4"
            />
            <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold">
            {t.thankYou}
          </DialogTitle>
        </DialogHeader>

        <div className="text-center space-y-4 py-4">
          <p className="text-muted-foreground">{t.confirmationMessage}</p>

          <div className="glass-card rounded-xl p-4 space-y-3 text-start">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="font-medium">{bookingData.service}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary shrink-0" />
              <span>{bookingData.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <span>{bookingData.time}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground font-medium">
            EL_Marketeur_TN
          </p>
        </div>

        <Button 
          onClick={onClose} 
          className="w-full gradient-gold text-primary-foreground font-bold"
        >
          {t.close}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
