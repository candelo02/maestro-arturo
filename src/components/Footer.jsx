export default function Footer(){
  return (
    <footer className="py-8 bg-[rgba(0,0,0,0.8)] text-center text-gray-400 relative">
      <p>© {new Date().getFullYear()} Maestro Arturo. Todos los derechos reservados.</p>

      <a
        href="https://wa.me/573115033959"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Contactar por WhatsApp"
      >
        {/* WhatsApp icon as simple SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.37 0 .01 5.36.01 12.01c0 2.11.55 4.15 1.6 5.95L0 24l6.36-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.36 12-11.99 0-3.2-1.25-6.2-3.48-8.53z" fill="#fff"/>
        </svg>
      </a>
    </footer>
  )
}
