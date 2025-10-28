import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[rgba(11,11,11,0.85)] dark:bg-[rgba(0,0,0,0.95)] fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-orange-500 tracking-wide">
          Maestro <span className="text-white dark:text-gray-100">Arturo</span>
        </h1>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </div>
      <ul className="hidden md:flex space-x-6 text-sm">
        <li><a href="#inicio" className="hover:text-orange-400">Inicio</a></li>
        <li><a href="#maestro" className="hover:text-orange-400">Maestro</a></li>
        <li><a href="#beneficios" className="hover:text-orange-400">Beneficios</a></li>
        <li><a href="#servicios" className="hover:text-orange-400">Servicios</a></li>
      </ul>
      <a
        href="https://wa.me/573115033959"
        target="_blank"
        rel="noreferrer"
        className="border border-orange-500 px-3 py-2 rounded-md hover:bg-orange-500 hover:text-black transition"
      >
        Contacto
      </a>
    </nav>
  )
}
