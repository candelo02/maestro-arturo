import { Coffee, Heart, Moon, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { buildWhatsAppLink } from '../utils/helpers'

const benefits = [
  { 
    slug: 'paz-interior',
    icon: Sparkles, 
    title: 'Paz Interior', 
    desc: 'Calma mental y equilibrio emocional tras limpiezas y guía personalizada.',
    longDesc: 'Experimenta un estado profundo de serenidad y equilibrio interior. A través de técnicas ancestrales y limpiezas energéticas personalizadas, liberarás tensiones acumuladas, ansiedades y cargas emocionales que impiden tu paz mental.',
    bullets: [
      'Reducción significativa de estrés y ansiedad',
      'Mayor claridad mental para la toma de decisiones',
      'Sensación de ligereza y tranquilidad duradera',
      'Mejora en la calidad del sueño y descanso',
    ]
  },
  { 
    slug: 'amor-relaciones',
    icon: Heart, 
    title: 'Amor y Relaciones', 
    desc: 'Reconstrucción y fortalecimiento de vínculos afectivos con rituales de amor.',
    longDesc: 'Sana heridas emocionales, fortalece vínculos de pareja y atrae amor genuino a tu vida. Los rituales de amor trabajan en la armonización de energías, la apertura del corazón y la eliminación de bloqueos que impiden relaciones sanas y duraderas.',
    bullets: [
      'Sanación de heridas emocionales del pasado',
      'Fortalecimiento de la relación de pareja',
      'Atracción de amor verdadero y sincero',
      'Reconciliación y renovación de vínculos',
    ]
  },
  { 
    slug: 'proteccion-espiritual',
    icon: Moon, 
    title: 'Protección Espiritual', 
    desc: 'Ceremonias que aíslan y protegen tu energía de influencias negativas.',
    longDesc: 'Crea un escudo protector alrededor de tu energía personal, hogar y seres queridos. Las ceremonias de protección espiritual sellan tu campo áurico, neutralizan energías negativas y te blindan contra envidias, mal de ojo y ataques energéticos.',
    bullets: [
      'Blindaje energético contra influencias negativas',
      'Protección del hogar y espacios personales',
      'Neutralización de envidias y mal de ojo',
      'Fortalecimiento del campo áurico personal',
    ]
  },
  { 
    slug: 'claridad-proposito',
    icon: Coffee, 
    title: 'Claridad y Propósito', 
    desc: 'Orientación y retiro de bloqueos para tomar decisiones con confianza.',
    longDesc: 'Descubre tu camino y propósito de vida con claridad y convicción. A través de guía espiritual personalizada y la eliminación de bloqueos mentales y energéticos, encontrarás dirección, motivación y la fuerza necesaria para alcanzar tus metas.',
    bullets: [
      'Identificación clara de tu propósito de vida',
      'Eliminación de bloqueos mentales y creativos',
      'Mayor confianza en la toma de decisiones',
      'Conexión profunda con tu intuición',
    ]
  },
]

export default function Benefits(){
  const [selected, setSelected] = useState(null)

  // Cerrar modal con ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="beneficios" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h3 className="text-3xl font-bold text-orange-500">Beneficios espirituales</h3>
        <p className="text-gray-300 mt-3">Resultados que podrás sentir: equilibrio, amor, prosperidad y protección.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {benefits.map((b) => {
          const Icon = b.icon
          return (
            <button
              key={b.slug}
              onClick={() => setSelected(b)}
              className="bg-[#0f0f0f] rounded-2xl p-6 text-center soft-glow border border-gray-800 hover:scale-105 hover:border-orange-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{background: 'radial-gradient(circle at 20% 20%, rgba(249,115,22,0.18), transparent 40%)'}}>
                <Icon className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{b.title}</h4>
              <p className="text-gray-300 text-sm">{b.desc}</p>
            </button>
          )
        })}
      </div>

      {/* Modal de detalle */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          aria-modal="true"
          role="dialog"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[85vh] bg-gradient-to-br from-[#0b0b0b] to-[#1a1a1a] text-white rounded-2xl border border-gray-700 overflow-hidden shadow-2xl animate-slideUp hover:shadow-orange-500/20 transition-shadow duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
              className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 hover:scale-110 border border-gray-700 flex items-center justify-center text-2xl transition-all duration-300"
            >
              ×
            </button>

            <div className="overflow-y-auto max-h-[85vh] p-6 md:p-10 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30">
                  <selected.icon className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-orange-500">{selected.title}</h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">{selected.longDesc}</p>

              {selected.bullets?.length > 0 && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Qué obtendrás:</h4>
                  <ul className="space-y-2">
                    {selected.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-orange-500 text-xl">✓</span>
                        <span className="text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 flex flex-wrap gap-3 border-t border-gray-800">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="inline-block px-5 py-3 rounded-md border border-gray-600 text-gray-200 hover:bg-gray-800 transition-colors"
                  aria-label="Cerrar modal"
                >
                  Cerrar
                </button>
                <a
                  href={buildWhatsAppLink(`Hola Maestro Valerio, me interesa obtener: ${selected.title}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-orange-500 text-black px-5 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
