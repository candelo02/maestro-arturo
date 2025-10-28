import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const sections = [
    { id: 'home', label: 'Inicio', path: '/' },
    { id: 'about', label: 'Sobre Mí', path: '/#about' },
    { id: 'services', label: 'Servicios', path: '/#services' },
    { id: 'benefits', label: 'Beneficios', path: '/#benefits' },
    { id: 'contact', label: 'Contacto', path: '/#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      closeMenu();
    }
  };

  const value = useMemo(() => ({
    isMenuOpen,
    toggleMenu,
    closeMenu,
    activeSection,
    setActiveSection,
    sections,
    scrollToSection
  }), [isMenuOpen, activeSection, sections]);
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}