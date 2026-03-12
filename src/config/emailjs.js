const envValue = (key) => (import.meta.env && import.meta.env[key] ? import.meta.env[key] : '');

export const EMAILJS_CONFIG = {
  serviceId: envValue('VITE_EMAILJS_SERVICE_ID'),
  templateId: envValue('VITE_EMAILJS_TEMPLATE_ID'),
  publicKey: envValue('VITE_EMAILJS_PUBLIC_KEY'),
  toEmail: envValue('VITE_EMAILJS_TO_EMAIL')
};

const missingKeys = Object.entries({
  VITE_EMAILJS_SERVICE_ID: EMAILJS_CONFIG.serviceId,
  VITE_EMAILJS_TEMPLATE_ID: EMAILJS_CONFIG.templateId,
  VITE_EMAILJS_PUBLIC_KEY: EMAILJS_CONFIG.publicKey,
  VITE_EMAILJS_TO_EMAIL: EMAILJS_CONFIG.toEmail
})
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingKeys.length > 0) {
  console.warn(`EmailJS config missing: ${missingKeys.join(', ')}`);
}

const pad2 = (value) => String(value).padStart(2, '0');

export const createRequestId = () => {
  const now = new Date();
  const stamp = `${now.getFullYear()}${pad2(now.getMonth() + 1)}${pad2(now.getDate())}-${pad2(
    now.getHours()
  )}${pad2(now.getMinutes())}${pad2(now.getSeconds())}`;
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();

  return `${stamp}-${random}`;
};

export const createRequestTimestamp = () => {
  const now = new Date();
  const datePart = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
  const timePart = `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())}`;

  return `${datePart} ${timePart}`;
};
