
CREATE TABLE public.contactos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT,
  mensaje TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contactos ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to insert contact form submissions
CREATE POLICY "Anyone can submit contact form"
  ON public.contactos
  FOR INSERT
  WITH CHECK (true);

-- Only service role can read contacts (admin only)
CREATE POLICY "Only service role can read contacts"
  ON public.contactos
  FOR SELECT
  USING (false);
