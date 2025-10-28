export default function About(){
  return (
    <section id="maestro" className="py-20 px-6 bg-[rgba(255,255,255,0.02)] dark:bg-[rgba(0,0,0,0.98)]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-bold text-orange-500 mb-4">Sobre Maestro Arturo</h3>
          <p className="text-gray-300 dark:text-gray-400 mb-4">
            Maestro Arturo es un guía espiritual con años de experiencia en tradiciones ancestrales y prácticas contemporáneas de sanación.
            Su trabajo combina sabiduría, intuición y técnicas rituales para ofrecer acompañamiento integral: desde limpiezas energéticas
            y reconciliaciones amorosas hasta ceremonias de prosperidad y protección.
          </p>
          <p className="text-gray-300 mb-4">
            Con una presencia serena y una sensibilidad afinada para las energías sutiles, Arturo brinda confianza y respeto. Sus cualidades
            como guía incluyen empatía sincera, discernimiento espiritual, compromiso con resultados y una profunda ética de servicio.
          </p>
          <p className="text-gray-300">
            Su propósito es devolver equilibrio, claridad y fortaleza a quienes buscan transformar su vida desde el interior.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-glow soft-glow border border-gray-800">
          <img src="/images/maestro-arturo.jpg" alt="Maestro Arturo" className="w-full h-72 object-cover" />
        </div>
      </div>
    </section>
  )
}
