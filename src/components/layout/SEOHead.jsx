import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function SEOHead({ 
  title = "Maestro Arturo - Guía Espiritual",
  description = "Descubre el camino hacia la paz interior y el crecimiento espiritual con el Maestro Arturo. Servicios de guía espiritual, consultas personalizadas y sanación energética.",
  image = "/images/og-image.jpg",
  url = typeof globalThis !== 'undefined' && globalThis.location ? globalThis.location.href : '',
}) {
  const { theme } = useTheme();

  useEffect(() => {
    // Actualizar meta tags (crear si no existen)
    document.title = title;

    const upsertMeta = ({ name, property, content }) => {
      try {
        let selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
        let el = document.querySelector(selector);
        if (!el) {
          el = document.createElement('meta');
          if (name) el.setAttribute('name', name);
          if (property) el.setAttribute('property', property);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      } catch (e) {
        // silencioso en caso de errores de DOM
        // console.warn('SEOHead upsertMeta error', e);
      }
    };

    upsertMeta({ name: 'description', content: description });
    upsertMeta({ property: 'og:title', content: title });
    upsertMeta({ property: 'og:description', content: description });
    upsertMeta({ property: 'og:image', content: image });
    upsertMeta({ property: 'og:url', content: url });
    upsertMeta({ name: 'theme-color', content: theme === 'dark' ? '#121212' : '#ffffff' });
  }, [title, description, image, url, theme]);

  return null;
}

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};