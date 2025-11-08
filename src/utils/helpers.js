export function formatDate(date) {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replaceAll(/[\u0300-\u036f]/g, '')
    .replaceAll(/\s+/g, '-')
    .replaceAll(/[^\w-]+/g, '')
    .replaceAll(/--+/g, '-')
    .trim();
}

export function truncateText(text, length = 100) {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

// Construye un enlace de WhatsApp con mensaje predefinido
export function buildWhatsAppLink(message, phone = '525652467648') {
  try {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  } catch {
    return `https://wa.me/${phone}`;
  }
}