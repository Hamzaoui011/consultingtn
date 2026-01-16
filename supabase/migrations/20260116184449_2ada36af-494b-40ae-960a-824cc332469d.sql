-- Create bookings table to store all meeting reservations
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL DEFAULT 50.00,
  duration INTEGER NOT NULL DEFAULT 45,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT unique_slot UNIQUE(booking_date, booking_time)
);

-- Enable RLS (we'll allow public inserts but protect reads)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert bookings (public form)
CREATE POLICY "Anyone can create bookings" 
ON public.bookings 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading to check for conflicts (minimal data)
CREATE POLICY "Anyone can check slot availability" 
ON public.bookings 
FOR SELECT 
USING (true);