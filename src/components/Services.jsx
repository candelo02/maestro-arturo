const services = [
  {
    title: "Ceremonias de Protección Espiritual",
    desc: "Protege tu energía y aleja vibraciones negativas con ceremonias que brindan paz y seguridad a tu entorno personal y familiar.",
    image: "/images/proteccion espiritual.jpg",
  },
  {
    title: "Limpiezas de Amor",
    desc: "Ceremonias diseñadas para atraer y fortalecer el amor en tu vida, restaurando vínculos y armonía emocional.",
    image: "/images/limpieza-amor.jpg",
  },
  {
    title: "Limpiezas Energéticas",
    desc: "Elimina bloqueos y energías negativas que afectan tu bienestar físico y emocional, restaurando tu equilibrio.",
    image: "/images/limpieza-energetica.jpg",
  },
]

export default function Services(){
  return (
    <section id="servicios" className="py-20 px-6 bg-[rgba(255,255,255,0.01)] dark:bg-[rgba(0,0,0,0.95)]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-orange-500 text-center mb-8">Mis Servicios</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s,i)=>(
            <div key={i} className="bg-[#111111] dark:bg-black rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition soft-glow">
              <img src={s.image} alt={s.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-orange-500 font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-300 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
