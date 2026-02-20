import emailjs from '@emailjs/browser';

// Debug mode - set to true for troubleshooting
const DEBUG_MODE = false;

// LeadFlow CRM configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

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

// Send data to LeadFlow CRM
const sendToLeadflow = async (data: EmailData): Promise<boolean> => {
  try {
    const nameParts = data.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: data.email || '',
      phone: data.phone,
      message: data.message,
      source: 'website-contact',
      customFields: {
        city: data.city || data.postcode || '',
        woonplaats: data.city || data.postcode || ''
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending data to Leadflow CRM:', leadflowData);
    }

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG_MODE) {
        console.error(`Leadflow error (${response.status}):`, errorText);
      }
      return false;
    }

    if (DEBUG_MODE) {
      console.log('Leadflow submission successful');
    }
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Leadflow submission failed:', error);
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

  // Send to all services in parallel
  const [emailJSSuccess, leadflowSuccess] = await Promise.allSettled([
    sendViaEmailJS(data),
    sendToLeadflow(data)
  ]);

  const emailJSResult = emailJSSuccess.status === 'fulfilled' && emailJSSuccess.value;
  const leadflowResult = leadflowSuccess.status === 'fulfilled' && leadflowSuccess.value;

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSResult);
    console.log('Leadflow success:', leadflowResult);
  }

  // Only throw error if ALL methods fail
  if (!emailJSResult && !leadflowResult) {
    throw new Error('Failed to send contact form data via EmailJS and Leadflow');
  }

  // Log successful submissions for monitoring
  if (DEBUG_MODE) {
    const methods = [];
    if (emailJSResult) methods.push('EmailJS');
    if (leadflowResult) methods.push('Leadflow');
    console.log(`Successful submissions: ${methods.join(', ')}`);
  }
};
