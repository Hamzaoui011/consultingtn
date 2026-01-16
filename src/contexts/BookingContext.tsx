import React, { createContext, useContext, useState } from 'react';

export interface BookingData {
  service: string;
  date: Date | null;
  time: string;
  fullName: string;
  email: string;
  phone: string;
}

interface BookingContextType {
  step: number;
  setStep: (step: number) => void;
  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;
  resetBooking: () => void;
}

const initialBookingData: BookingData = {
  service: '',
  date: null,
  time: '',
  fullName: '',
  email: '',
  phone: ''
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData);

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const resetBooking = () => {
    setStep(1);
    setBookingData(initialBookingData);
  };

  return (
    <BookingContext.Provider value={{ step, setStep, bookingData, updateBookingData, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
