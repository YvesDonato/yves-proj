export const onRequestPost = async ({ request, env }) => {
  try {
    // Parse form data
    const formData = await request.json();
    const userEmail = formData.email;

    if (!userEmail) {
      return new Response(JSON.stringify({ error: 'Email is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send email using SendGrid API
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: env.EMAIL_TO }],
          },
        ],
        from: { email: env.EMAIL_FROM }, // Must be verified with SendGrid
        subject: 'New Contact Form Submission',
        content: [
          {
            type: 'text/plain',
            value: `You have received a new email submission: ${userEmail}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SendGrid error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to send email.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

