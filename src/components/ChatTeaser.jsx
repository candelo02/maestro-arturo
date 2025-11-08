import { useEffect, useMemo, useState } from 'react'
import { buildWhatsAppLink } from '../utils/helpers'
import { services } from './Services'

export default function ChatTeaser(){
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const threshold = 200 // px antes del final
    const check = () => {
      const scrolled = window.scrollY + window.innerHeight
      const height = document.documentElement.scrollHeight
      if (height - scrolled <= threshold){
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return ()=>{
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  const close = ()=>{
    setVisible(false)
  }

  const servicesList = useMemo(()=> services.map(s=>s.title).join(', '), [])

  if (!visible) return null

  return (
    <div className="fixed bottom-4 right-4 z-[120] max-w-md w-[92vw] md:w-[420px] animate-slideUp">
      <div className="relative rounded-2xl border border-gray-700 bg-[#0b0b0b]/95 text-white shadow-2xl soft-glow overflow-hidden">
        <button
          aria-label="Cerrar"
          onClick={close}
          className="absolute top-2 right-2 h-9 w-9 rounded-full bg-black/50 hover:bg-black/70 hover:scale-110 border border-gray-700 flex items-center justify-center text-xl transition-all"
        >
          ×
        </button>
        <div className="p-4 flex gap-3">
          <div className="shrink-0 h-12 w-12 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold">MA</div>
          <div className="space-y-2">
            <p className="leading-relaxed">
              <span className="font-semibold text-orange-400">Hola</span>, soy el <span className="font-semibold">Maestro Valerio</span>, especialista en {servicesList}. ¿Te gustaría orientación ahora mismo?
            </p>
            <div className="flex gap-2 pt-1">
              <a
                href={buildWhatsAppLink(`Hola Maestro Valerio, me gustaría orientación sobre sus servicios (${servicesList}).`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-orange-500 text-black font-semibold hover:bg-orange-600 transition-colors"
              >
                Contactar por WhatsApp
              </a>
              <button onClick={close} className="px-4 py-2 rounded-md border border-gray-600 text-gray-200 hover:bg-gray-800 transition-colors">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
