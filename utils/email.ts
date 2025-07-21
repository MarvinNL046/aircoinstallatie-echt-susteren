import emailjs from '@emailjs/browser';

// Debug mode - set to true for troubleshooting
const DEBUG_MODE = false;

// GoHighLevel webhook URL
const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

// Email data interface
export interface EmailData {
  name: string;
  email?: string;
  phone: string;
  postcode?: string;
  city?: string;
  service?: string;
  message?: string;
}

// Send data to GoHighLevel webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    const webhookData = {
      data: {
        name: data.name,
        email: data.email || '',
        phone: data.phone,
        city: data.city || data.postcode || '',
        message: data.message || 'Geen aanvullend bericht'
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending to webhook:', webhookData);
    }

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response status:', response.status);
      console.log('Webhook response:', await response.clone().text());
    }

    return response.ok;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Webhook error:', error);
    }
    return false;
  }
};

// Send via EmailJS
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email || 'Geen e-mail opgegeven',
      phone: data.phone,
      postcode: data.postcode || 'Niet opgegeven',
      service: data.service || 'Niet gespecificeerd',
      message: data.message || 'Geen aanvullend bericht',
      to_name: 'Airco Installatie Echt-Susteren',
    };

    if (DEBUG_MODE) {
      console.log('Sending via EmailJS:', templateParams);
    }

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    if (DEBUG_MODE) {
      console.log('EmailJS result:', result);
    }

    return result.status === 200;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS error:', error);
    }
    return false;
  }
};

// Main send function with dual submission
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('Starting dual submission with data:', data);
  }

  // Send to both services in parallel
  const [emailJSSuccess, webhookSuccess] = await Promise.allSettled([
    sendViaEmailJS(data),
    sendToWebhook(data)
  ]);

  const emailJSResult = emailJSSuccess.status === 'fulfilled' && emailJSSuccess.value;
  const webhookResult = webhookSuccess.status === 'fulfilled' && webhookSuccess.value;

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSResult);
    console.log('Webhook success:', webhookResult);
  }

  // Only throw error if BOTH methods fail
  if (!emailJSResult && !webhookResult) {
    throw new Error('Failed to send contact form data via both EmailJS and webhook');
  }

  // Log successful submissions for monitoring
  if (emailJSResult && webhookResult) {
    if (DEBUG_MODE) console.log('✅ Both submissions successful');
  } else if (emailJSResult) {
    if (DEBUG_MODE) console.log('✅ EmailJS successful, ⚠️ Webhook failed');
  } else if (webhookResult) {
    if (DEBUG_MODE) console.log('⚠️ EmailJS failed, ✅ Webhook successful');
  }
};