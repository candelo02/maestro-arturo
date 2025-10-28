import { useEffect, useState } from 'react'

const slides = [
  {
    image: '/images/proteccion-espiritual.jpg',
    title: 'Protección Espiritual a tu Medida',
    text: 'Protege tu energía y atrae vibraciones positivas con rituales personalizados del Maestro Arturo.'
  },
  {
    image: '/images/limpieza-energetica.jpg',
    title: 'Limpiezas Energéticas y de Amor',
    text: 'Restablece la armonía emocional y espiritual mediante limpiezas profundas y con intención.'
  },
  {
    image: '/images/ceremonia-prosperidad.jpg',
    title: 'Ceremonias para la Prosperidad',
    text: 'Abre caminos de abundancia y éxito con ceremonias ancestrales y enfoque en resultados.'
  }
]

export default function HeroCarousel(){
  const [current, setCurrent] = useState(0)

  useEffect(()=> {
    const t = setInterval(()=> setCurrent(s => (s+1) % slides.length), 5000)
    return ()=> clearInterval(t)
  },[])

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i===current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <img src={s.image} alt={s.title} className="w-full h-full object-cover brightness-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{s.title}</h2>
            <p className="max-w-xl text-gray-200 mb-6">{s.text}</p>
            <a href="https://wa.me/573115033959" target="_blank" rel="noreferrer" className="bg-orange-500 text-black px-6 py-3 rounded-md hover:bg-orange-600 transition font-semibold">
              Contáctame 🔮
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
