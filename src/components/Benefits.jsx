import { Sparkles, Heart, Moon, Coffee } from 'lucide-react'

const benefits = [
  { icon: Sparkles, title: 'Paz Interior', desc: 'Calma mental y equilibrio emocional tras limpiezas y guía personalizada.' },
  { icon: Heart, title: 'Amor y Relaciones', desc: 'Reconstrucción y fortalecimiento de vínculos afectivos con rituales de amor.' },
  { icon: Moon, title: 'Protección Espiritual', desc: 'Ceremonias que aíslan y protegen tu energía de influencias negativas.' },
  { icon: Coffee, title: 'Claridad y Propósito', desc: 'Orientación y retiro de bloqueos para tomar decisiones con confianza.' },
]

export default function Benefits(){
  return (
    <section id="beneficios" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h3 className="text-3xl font-bold text-orange-500">Beneficios espirituales</h3>
        <p className="text-gray-300 mt-3">Resultados que podrás sentir: equilibrio, amor, prosperidad y protección.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {benefits.map((b, i) => {
          const Icon = b.icon
          return (
            <div key={i} className="bg-[#0f0f0f] rounded-2xl p-6 text-center soft-glow border border-gray-800">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{background: 'radial-gradient(circle at 20% 20%, rgba(249,115,22,0.18), transparent 40%)'}}>
                <Icon className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{b.title}</h4>
              <p className="text-gray-300 text-sm">{b.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
