import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const resendApiKey = process.env.RESEND_API_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(resendApiKey);

export const config = {
  runtime: 'edge', // Using edge for faster response
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
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
    } = body;

    if (!email || !full_name) {
      return new Response(JSON.stringify({ error: 'Missing required fields: email and full_name' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1. Save to Supabase
    const { error: sbError } = await supabase
      .from('strategy_leads')
      .insert([
        {
          full_name,
          email,
          company,
          role,
          service_choice: service,
          message,
          source: source || 'strategy_call',
          business_name,
          business_type,
          created_at: new Date().toISOString()
        }
      ]);

    if (sbError) {
      console.error('Supabase error:', sbError);
      // We continue even if DB fails, to ensure redundancy if Resend works, 
      // but usually we want to know.
    }

    // 2. Trigger Resend Notification
    const timestamp = new Date().toLocaleString();
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
Timestamp: ${timestamp}

Message/Problem:
----------------
${message || 'No message provided.'}
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
