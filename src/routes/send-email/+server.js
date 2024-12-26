import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    // Parse form data (because an HTML form uses x-www-form-urlencoded or multipart/form-data)
    const formData = await request.formData();
    const userEmail = formData.get('email');

    // Validate
    if (!userEmail) {
      return json({ error: 'Email is required.' }, { status: 400 });
    }

    // Retrieve env variables (the same as before)
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
        personalizations: [{ to: [{ email: emailTo }] }],
        from: { email: emailFrom },
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

