export const EMAILJS_CONFIG = {
  serviceId: 'service_asnj6e5',
  templateId: 'template_qdmt1df',
  publicKey: 'jcCskwVRv1a_qoge2',
  toEmail: 'info@noekmemorial.be'
};

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
