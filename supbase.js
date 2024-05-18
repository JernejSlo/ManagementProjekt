import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://exsmnmievlqxpesvhbln.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4c21ubWlldmxxeHBlc3ZoYmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNDM3MzcsImV4cCI6MjAzMTYxOTczN30.CfP1ooFGz_qJ03UzjcJkGgnEE-penYQXm3jig-_4G3k';

export const supabase = createClient(supabaseUrl, supabaseKey);
