// Construye un enlace de WhatsApp con mensaje predefinido
export function buildWhatsAppLink(message, phone = '5218123267811') {
  try {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  } catch {
    return `https://wa.me/${phone}`;
  }
}
