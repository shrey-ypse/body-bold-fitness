import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // We don't throw here to prevent the whole app from crashing if keys are missing
  // But we should log a warning in development
  if (process.env.NODE_ENV === 'development') {
    console.warn('Supabase credentials missing. Persistence will not work.');
  }
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);
