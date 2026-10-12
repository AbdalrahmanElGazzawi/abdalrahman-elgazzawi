// The contact form only makes sense when a message lands somewhere: an email
// via Resend, or a row in Supabase. Without either, the form is hidden and the
// API refuses submissions instead of pretending they were sent.
export function contactDeliveryConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY ||
      (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
  );
}
