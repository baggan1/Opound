import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
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

    // Fail hard if critical database variables are missing
    if (!supabaseUrl || !supabaseKey) {
      console.error('Critical Error: Missing Supabase environment variables');
      return res.status(500).json({ error: 'Database configuration error' });
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

    // 1. Save to Supabase (Priority)
    const { error: sbError } = await supabase
      .from('strategy_leads')
      .insert([
        {
          full_name,
          email,
          company: company || business_name,
          role: role || business_type,
          service_choice: service,
          message,
          source: source || 'unknown',
          business_name,
          business_type,
          created_at: new Date().toISOString()
        }
      ]);

    if (sbError) {
      console.error('Supabase error reported:', sbError.message);
      return res.status(500).json({ error: 'Failed to save lead to database' });
    }

    // 2. Trigger Resend Notification (Optional - don't fail the whole request if this fails)
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const isDirectMessage = source === 'direct_message' || source === 'modal_contact';
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
Company: ${company || business_name || 'N/A'}
Role: ${role || business_type || 'N/A'}
Service: ${service || 'Not specified'}
Source: ${source}

Message:
----------------
${message || 'No message provided.'}
          `,
        });
      } catch (resendError: any) {
        console.error('Resend notification failed:', resendError.message);
      }
    } else {
      console.warn('Warning: RESEND_API_KEY is missing. No email notification was sent.');
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('API Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
