import { json } from '@sveltejs/kit';

/** 
 * POST /send-email
 * SvelteKit automatically routes POST requests here.
 */
export async function POST({ request }) {
  try {
    // Parse the incoming JSON body
    const formData = await request.json();
    const userEmail = formData.email;

    // Simple validation
    if (!userEmail) {
      return json({ error: 'Email is required.' }, { status: 400 });
    }

    // Here, fetch your env vars. 
    // In many SvelteKit setups, you'd use `import.meta.env.VITE_...` 
    // or something like process.env.SENDGRID_API_KEY if your deployment 
    // environment injects them that way.
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    const emailTo = process.env.EMAIL_TO;
    const emailFrom = process.env.EMAIL_FROM;

    // Send email via SendGrid
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sendgridApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: emailTo }]
          }
        ],
        from: { email: emailFrom }, // Must be verified with SendGrid
        subject: 'New Contact Form Submission',
        content: [
          {
            type: 'text/plain',
            value: `You have received a new email submission: ${userEmail}`
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SendGrid error:', errorText);
      return json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return json({ success: true, message: 'Email sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return json({ error: 'Internal server error.' }, { status: 500 });
  }
}

