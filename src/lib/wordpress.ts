/**
 * WordPress Headless CMS API Layer
 * ================================
 * This module handles all communication between the React frontend
 * and the WordPress backend (REST API + Contact Form 7).
 *
 * SETUP INSTRUCTIONS:
 * 1. Set VITE_WORDPRESS_URL in your .env file to your WordPress domain
 *    Example: VITE_WORDPRESS_URL=https://cms.rethrivewellness.com
 *
 * 2. Install these WordPress plugins:
 *    - WPGraphQL (optional, for content queries)
 *    - Contact Form 7 (for form submissions)
 *    - Advanced Custom Fields (for structured content)
 *
 * 3. Create a Contact Form 7 form in WP Admin with these fields:
 *    [text* your-name]
 *    [email* your-email]
 *    [tel* your-phone]
 *    [select* service-type "Physical Therapy (PT)" "Occupational Therapy (OT)" "Wellness Coaching"]
 *    [select* area "Scottsdale" "Phoenix" "Tempe" "Mesa" "Chandler" "Gilbert" "Glendale" "Peoria" "Surprise" "Cave Creek / Carefree" "Paradise Valley" "Fountain Hills" "Other"]
 *    [select goal "Relieve Pain" "Recover from Surgery" "Improve Mobility/Balance" "General Wellness" "Other"]
 *    [textarea condition]
 *    [select preferred-days "Mon" "Tue" "Wed" "Thu" "Fri" "Sat"]
 *    [select preferred-time "No preference" "Morning (7am - 11am)" "Afternoon (12pm - 4pm)" "Evening (5pm - 8pm)"]
 *
 * 4. Note the form ID (visible in the shortcode, e.g. [contact-form-7 id="123"])
 *    and set it as VITE_CF7_FORM_ID in your .env
 *
 * 5. Enable CORS in wp-config.php:
 *    header('Access-Control-Allow-Origin: https://your-react-domain.com');
 *    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
 *    header('Access-Control-Allow-Headers: Content-Type, Authorization');
 */

// ─── Configuration ───────────────────────────────────────────────────────────

const WP_BASE_URL = import.meta.env.VITE_WORDPRESS_URL || 'https://your-wordpress-domain.com';
const CF7_FORM_ID = import.meta.env.VITE_CF7_FORM_ID || '123'; // Replace with your CF7 form ID

export const WP_CONFIG = {
  baseUrl: WP_BASE_URL,
  restApi: `${WP_BASE_URL}/wp-json`,
  graphql: `${WP_BASE_URL}/graphql`,
  cf7Endpoint: `${WP_BASE_URL}/wp-json/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback`,
  phoneNumber: '(480) 935-8225',
  phoneHref: 'tel:4809358225',
  email: 'Info@rethrivewellness.com',
};

// ─── Types ───────────────────────────────────────────────────────────────────

/** Intake form data — full multi-step form on /intake */
export interface IntakeFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  area: string;
  serviceType: string;
  reason: string;
  preferredDays: string[];
  preferredTime: string;
}

/** CTA quick form data — short form on homepage / other pages */
export interface CTAFormData {
  name: string;
  phone: string;
  serviceType: string;
  area: string;
  goal: string;
}

/** Contact Form 7 API response */
export interface CF7Response {
  status: 'mail_sent' | 'mail_failed' | 'validation_failed' | 'acceptance_missing' | 'spam';
  message: string;
  posted_data_hash: string;
  into: string;
  invalid_fields: Array<{
    field: string;
    message: string;
    idref: string | null;
    error_id: string;
  }>;
}

/** Service area options — could be fetched from WP in the future */
export const SERVICE_AREAS = [
  { value: 'scottsdale', label: 'Scottsdale' },
  { value: 'phoenix', label: 'Phoenix' },
  { value: 'tempe', label: 'Tempe' },
  { value: 'mesa', label: 'Mesa' },
  { value: 'chandler', label: 'Chandler' },
  { value: 'gilbert', label: 'Gilbert' },
  { value: 'glendale', label: 'Glendale' },
  { value: 'peoria', label: 'Peoria' },
  { value: 'surprise', label: 'Surprise' },
  { value: 'cave-creek', label: 'Cave Creek / Carefree' },
  { value: 'paradise-valley', label: 'Paradise Valley' },
  { value: 'fountain-hills', label: 'Fountain Hills' },
  { value: 'other', label: 'Other' },
] as const;

/** Service type options */
export const SERVICE_TYPES = [
  { value: 'pt', label: 'Physical Therapy (PT)' },
  { value: 'ot', label: 'Occupational Therapy (OT)' },
  { value: 'wellness', label: 'Wellness Coaching' },
  // Uncomment when Massage Therapy is confirmed:
  // { value: 'massage', label: 'Massage Therapy' },
] as const;

/** Goal options for the CTA quick form */
export const GOAL_OPTIONS = [
  { value: 'pain', label: 'Relieve Pain' },
  { value: 'surgery', label: 'Recover from Surgery' },
  { value: 'mobility', label: 'Improve Mobility/Balance' },
  { value: 'wellness', label: 'General Wellness' },
  { value: 'other', label: 'Other' },
] as const;

/** Preferred days */
export const PREFERRED_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

/** Preferred time slots */
export const TIME_SLOTS = [
  { value: '', label: 'No preference' },
  { value: 'morning', label: 'Morning (7am - 11am)' },
  { value: 'afternoon', label: 'Afternoon (12pm - 4pm)' },
  { value: 'evening', label: 'Evening (5pm - 8pm)' },
] as const;

// ─── API Functions ───────────────────────────────────────────────────────────

/**
 * Submit the full intake form to WordPress via Contact Form 7 REST API.
 *
 * Maps React form fields to CF7 field names. Update the CF7 field names
 * below to match whatever you set in the WordPress Contact Form 7 editor.
 */
export async function submitIntakeForm(data: IntakeFormData): Promise<CF7Response> {
  const formData = new FormData();

  // Map to CF7 field names (must match your CF7 form tag names)
  formData.append('your-name', `${data.firstName} ${data.lastName}`);
  formData.append('your-email', data.email);
  formData.append('your-phone', data.phone);
  formData.append('service-type', data.serviceType);
  formData.append('area', data.area);
  formData.append('condition', data.reason);
  formData.append('preferred-days', data.preferredDays.join(', '));
  formData.append('preferred-time', data.preferredTime);

  try {
    const response = await fetch(WP_CONFIG.cf7Endpoint, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('[WordPress] Intake form submission failed:', error);
    // Return a structured error so the UI can handle it
    return {
      status: 'mail_failed',
      message: 'Unable to reach the server. Please try again or call us directly.',
      posted_data_hash: '',
      into: '',
      invalid_fields: [],
    };
  }
}

/**
 * Submit the short CTA form to WordPress via Contact Form 7 REST API.
 *
 * This uses the same CF7 form but sends fewer fields. The unused fields
 * will simply be blank in the WordPress email notification.
 */
export async function submitCTAForm(data: CTAFormData): Promise<CF7Response> {
  const formData = new FormData();

  formData.append('your-name', data.name);
  formData.append('your-phone', data.phone);
  formData.append('service-type', data.serviceType);
  formData.append('area', data.area);
  formData.append('goal', data.goal);

  try {
    const response = await fetch(WP_CONFIG.cf7Endpoint, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('[WordPress] CTA form submission failed:', error);
    return {
      status: 'mail_failed',
      message: 'Unable to reach the server. Please try again or call us directly.',
      posted_data_hash: '',
      into: '',
      invalid_fields: [],
    };
  }
}

/**
 * DEV MODE: Simulates a successful form submission for local development
 * when no WordPress backend is connected. Remove or gate behind
 * import.meta.env.DEV in production.
 */
export function simulateFormSubmission(): Promise<CF7Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'mail_sent',
        message: 'Thank you for your message. It has been sent.',
        posted_data_hash: 'dev-' + Date.now(),
        into: '#',
        invalid_fields: [],
      });
    }, 1500);
  });
}

/**
 * Determines whether to use the real WordPress API or the dev simulator.
 * In production, this should always use the real API.
 */
export function isWordPressConnected(): boolean {
  return WP_CONFIG.baseUrl !== 'https://your-wordpress-domain.com';
}
