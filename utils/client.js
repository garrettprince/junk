import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://okevsdpfnrlaqdxnpixo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZXZzZHBmbnJsYXFkeG5waXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcyNDAwNDgsImV4cCI6MTk3MjgxNjA0OH0.71Eik8ZJ83YUPWUGS_PpUQ41lIBWT8cpndyV5j5rUO4"
);
