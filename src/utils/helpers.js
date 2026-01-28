// Construye un enlace de WhatsApp con mensaje predefinido
export function buildWhatsAppLink(message, phone = '525531987744') {
  try {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  } catch {
    return `https://wa.me/${phone}`;
  }
}
