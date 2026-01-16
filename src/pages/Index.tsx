import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { BookingFlow } from '@/components/booking/BookingFlow';
import { ProgressIndicator } from '@/components/booking/ProgressIndicator';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4">
          <ProgressIndicator />
          <BookingFlow />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
