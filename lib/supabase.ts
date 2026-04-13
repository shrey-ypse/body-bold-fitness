import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  if (process.env.NODE_ENV === 'development') {
    console.warn('Supabase credentials missing. Persistence will not work.');
  }
}

// Use Service Role Key if on server (bypasses RLS), otherwise fallback to Anon Key
// Service role key is NOT prefixed with NEXT_PUBLIC_ so it's private to the server
const supabaseKey = supabaseServiceKey || supabaseAnonKey || '';

export const supabase = createClient(
  supabaseUrl || '',
  supabaseKey
);

