import { useEffect, useState } from 'react'
import { buildWhatsAppLink } from '../utils/helpers'

export const services = [
  {
    slug: 'proteccion-espiritual',
    title: "Ceremonias de Protección Espiritual",
    desc: "Protege tu energía y aleja vibraciones negativas con ceremonias que brindan paz y seguridad a tu entorno personal y familiar.",
    longDesc:
      "Rituales personalizados para sellar, blindar y armonizar tu campo energético. Se combinan oraciones, elementos de protección y limpiezas sutiles para cortar influencias negativas y fortalecer tu aura.",
    bullets: [
      'Evaluación energética inicial',
      'Ritual de protección y sellado',
      'Recomendaciones de cuidado en casa',
    ],
    image: "/images/proteccion espiritual.jpg",
  },
  {
    slug: 'limpiezas-de-amor',
    title: "Limpiezas de Amor",
    desc: "Ceremonias diseñadas para atraer y fortalecer el amor en tu vida, restaurando vínculos y armonía emocional.",
    longDesc:
      "Trabajos enfocados en sanar heridas, desbloquear el flujo del amor propio y mejorar la afinidad de pareja. Se emplean elementos consagrados con intención para armonizar el vínculo.",
    bullets: [
      'Armonización del vínculo',
      'Ritual con intención amorosa',
      'Acompañamiento posterior',
    ],
    image: "/images/limpieza-amor.jpg",
  },
  {
    slug: 'limpiezas-energeticas',
    title: "Limpiezas Energéticas",
    desc: "Elimina bloqueos y energías negativas que afectan tu bienestar físico y emocional, restaurando tu equilibrio.",
    longDesc:
      "Limpiezas profundas para depurar energías densas, envidias o cargas del entorno. Favorecen claridad mental, descanso y sensación de ligereza.",
    bullets: [
      'Diagnóstico energético',
      'Limpieza con elementos consagrados',
      'Recomendaciones de continuidad',
    ],
    image: "/images/limpieza-energetica.jpg",
  },
]

export default function Services(){
  const [selected, setSelected] = useState(null)

  // Cerrar modal con ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="servicios" className="py-20 px-6 bg-[rgba(255,255,255,0.01)] dark:bg-[rgba(0,0,0,0.95)]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-orange-500 text-center mb-8">Mis Servicios</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s)=> (
            <button
              key={s.slug}
              onClick={() => setSelected(s)}
              className="text-left bg-[#111111] dark:bg-black rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition soft-glow focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <img src={s.image} alt={s.title} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-orange-500 font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-300 text-sm">{s.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal de detalle */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] bg-[#0b0b0b] text-white rounded-2xl border border-gray-800 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
              className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 border border-gray-700 flex items-center justify-center text-2xl"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2 h-full">
              <div className="relative h-56 md:h-full">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              </div>
              <div className="h-full overflow-y-auto p-6 md:p-8 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-500">{selected.title}</h3>
                <p className="text-gray-300">{selected.longDesc}</p>
                {selected.bullets?.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {selected.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="inline-block px-5 py-3 rounded-md border border-gray-600 text-gray-200 hover:bg-gray-800"
                    aria-label="Cerrar modal"
                  >
                    Cerrar
                  </button>
                  <a
                    href={buildWhatsAppLink(`Hola Maestro Valerio, quiero saber más sobre: ${selected.title}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-orange-500 text-black px-5 py-3 rounded-md font-semibold hover:bg-orange-600"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
