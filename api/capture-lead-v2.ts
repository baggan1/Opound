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

    // Map fields to match the provided Supabase schema
    const leadData = {
      full_name,
      email,
      company_name: company || business_name || null,
      role: role || business_type || null,
      service_interest: service || null,
      message: message || null,
      source: source || 'unknown',
      created_at: new Date().toISOString()
    };

    // 1. Save to Supabase
    const { error: sbError } = await supabase
      .from('strategy_leads')
      .insert([leadData]);

    if (sbError) {
      console.error('Supabase error reported:', sbError.message);
      return res.status(500).json({ error: `Database error: ${sbError.message}` });
    }

    // 2. Trigger Resend Notification
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
Company: ${leadData.company_name || 'N/A'}
Role/Type: ${leadData.role || 'N/A'}
Service: ${service || 'Not specified'}
Source: ${source}

Message:
----------------
${message || 'No message provided.'}
          `,
        });
      } catch (resendError: any) {
        console.error('Resend notification failed:', resendError.message);
        // We don't fail the request if just the email fails, since DB succeeded
      }
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('API Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
