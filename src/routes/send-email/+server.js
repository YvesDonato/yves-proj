import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';

export async function POST({ request }) {
  try {
    // 1) Set the API Key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log("test"+process.env.SENDGRID_API_KEY);
    // 2) Parse the form or JSON data
    const data = await request.formData();
    const userEmail = data.get('email');

    if (!userEmail) {
      return json({ error: 'Email is required.' }, { status: 400 });
    }

    // 3) Build your message
    const msg = {
      to: "yvesdonato0@gmail.com",
      from: "yvesdonato0@gmail.com", // verified with SendGrid
      subject: 'New Contact Form Submission',
      text: `You have received a new email submission: ${userEmail}`
    };

    // 4) Send the email
    const [response] = await sgMail.send(msg);

    // Check response status
    if (response.statusCode >= 200 && response.statusCode < 300) {
      return json({ success: true, message: 'Email sent successfully via Node library.' }, { status: 200 });
    } else {
      return json({ error: 'Failed to send email (status code).'}, { status: 500 });
    }
  } catch (error) {
    console.error('SendGrid Node.js library error:', error);
    return json({ error: 'Internal server error.' }, { status: 500 });
  }
}
