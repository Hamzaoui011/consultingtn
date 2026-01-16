import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="EL Marketeur TN" 
              className="h-8 w-auto"
            />
            <span className="font-bold">{t.brand}</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} EL_Marketeur_TN - Hamzaoui Mohamed Yassine. {t.allRights}.
          </p>
        </div>
      </div>
    </footer>
  );
};
