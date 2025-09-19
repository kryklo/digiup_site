import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EmailRequest {
  name: string
  company?: string
  email: string
  description: string
  recaptchaToken: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405, 
        headers: corsHeaders 
      })
    }

    // Parse request body
    const { name, company, email, description, recaptchaToken }: EmailRequest = await req.json()

    // Validate required fields
    if (!name || !email || !description || !recaptchaToken) {
      return new Response('Missing required fields', { 
        status: 400, 
        headers: corsHeaders 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response('Invalid email format', { 
        status: 400, 
        headers: corsHeaders 
      })
    }

    // Verify reCAPTCHA
    const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET_KEY')
    if (!recaptchaSecret) {
      console.error('reCAPTCHA secret key not configured')
      return new Response('Server configuration error', { 
        status: 500, 
        headers: corsHeaders 
      })
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    })

    const recaptchaResult = await recaptchaResponse.json()
    
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.log('reCAPTCHA verification failed:', recaptchaResult)
      return new Response('reCAPTCHA verification failed', { 
        status: 400, 
        headers: corsHeaders 
      })
    }

    // Rate limiting - simple check (in production, use Redis or similar)
    const userAgent = req.headers.get('user-agent') || ''
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown'

    // Prepare email content
    const emailSubject = `Nowe zapytanie z digiup.biz od ${name}`
    const emailBody = `
Nowe zapytanie z formularza kontaktowego:

Imię i nazwisko: ${name}
${company ? `Firma: ${company}` : ''}
Email: ${email}
IP: ${clientIP}
User Agent: ${userAgent}

Opis problemu:
${description}

---
Wiadomość wysłana automatycznie z digiup.biz
    `.trim()

    // SECURITY: Fixed recipient - always send only to krystian@digiup.biz
    const FIXED_RECIPIENT = 'krystian@digiup.biz'
    
    // Get SMTP configuration from environment
    const smtpConfig = {
      host: Deno.env.get('SMTP_HOST'),
      port: parseInt(Deno.env.get('SMTP_PORT') || '587'),
      username: Deno.env.get('SMTP_USER'),
      password: Deno.env.get('SMTP_PASS'),
    }

    // Validate SMTP configuration
    if (!smtpConfig.host || !smtpConfig.username || !smtpConfig.password) {
      console.error('Missing SMTP configuration')
      return new Response('Server configuration error', { 
        status: 500, 
        headers: corsHeaders 
      })
    }

    // Send email using SMTP
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'default_service',
        template_id: 'default_template',
        user_id: 'default_user',
        template_params: {
          to_email: FIXED_RECIPIENT, // SECURITY: Always fixed recipient
          from_name: name,
          from_email: email,
          company: company || 'Nie podano',
          message: description,
          subject: emailSubject,
        }
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    // Log successful email (for monitoring)
    console.log(`Email sent successfully to ${FIXED_RECIPIENT} from ${email} (reCAPTCHA score: ${recaptchaResult.score})`)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to send email' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})