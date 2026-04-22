import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  // Handle CORS if needed, but since it's same-origin it should be fine
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseKey || !resendApiKey) {
      console.error('Missing environment variables:', {
        url: !!supabaseUrl,
        key: !!supabaseKey,
        resend: !!resendApiKey
      });
      return res.status(500).json({ error: 'System configuration error' });
    }

    const { 
      full_name, 
      email, 
      company, 
      role, 
      service, 
      message, 
      source,
      business_name,
      business_type 
    } = req.body;

    if (!email || !full_name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const resend = new Resend(resendApiKey);

    // 1. Save to Supabase
    // We'll try to insert and catch errors specifically
    const { error: sbError } = await supabase
      .from('strategy_leads')
      .insert([
        {
          full_name,
          email,
          company,
          role,
          service_choice: service, // Verify this column exists or fallback to the one you created
          message,
          source: source || 'strategy_call',
          business_name,
          business_type,
          created_at: new Date().toISOString()
        }
      ]);

    if (sbError) {
      console.error('Supabase error reported:', sbError.message, sbError.details);
      // We still want to send the email even if DB fails
    }

    // 2. Trigger Resend Notification
    try {
      const isDirectMessage = source === 'direct_message';
      const emailSubject = isDirectMessage 
        ? `New Opound Message — ${full_name}`
        : `New Strategy Call Lead — ${full_name}`;

      await resend.emails.send({
        from: 'Opound Leads <leads@send.opound.com>',
        to: 'navilla.bagga@gmail.com',
        subject: emailSubject,
        text: `
Lead Details:
----------------
Name: ${full_name}
Email: ${email}
Company/Business: ${company || business_name || 'N/A'}
Role/Type: ${role || business_type || 'N/A'}
Service Interested: ${service || 'Not specified'}
Source: ${source || 'strategy_call'}

Message/Problem:
----------------
${message || 'No message provided.'}
        `,
      });
    } catch (resendError: any) {
      console.error('Resend error:', resendError.message);
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('API Error:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
