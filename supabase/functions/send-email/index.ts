import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { formType, username, name, email, phone, requirements } = await req.json()

    // Create email content
    const emailContent = `
      New ${formType} Request
      
      Username: ${username}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Requirements: ${requirements}
      
      Submitted at: ${new Date().toISOString()}
    `

    // For now, we'll log the email content
    // In production, you would integrate with an email service like Resend, SendGrid, etc.
    console.log('Email to be sent to info@twinfinity.tech:')
    console.log(emailContent)

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully! We will contact you soon.' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})