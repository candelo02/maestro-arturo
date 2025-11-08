import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function SEOHead({ 
  title = "Maestro Valerio - Guía Espiritual",
  description = "Descubre el camino hacia la paz interior y el crecimiento espiritual con el Maestro Valerio. Servicios de guía espiritual, consultas personalizadas y sanación energética.",
  image = "/images/maestro-valerio.jpg",
  url = typeof globalThis !== 'undefined' && globalThis.location ? globalThis.location.href : 'https://maestro-valerio.vercel.app',
}) {
  const { theme } = useTheme();

  useEffect(() => {
    // Establecer idioma y actualizar meta tags (crear si no existen)
    try { document.documentElement.lang = 'es-MX'; } catch (e) {}
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
    upsertMeta({ name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta({ name: 'twitter:title', content: title });
    upsertMeta({ name: 'twitter:description', content: description });
    upsertMeta({ name: 'twitter:image', content: image });
    upsertMeta({ name: 'keywords', content: 'maestro, amarre, amarres, beneficios, guía espiritual, guia espiritual, desligamiento, limpiezas energéticas, ceremonias de prosperidad, protección espiritual' });

  // Meta tags para geotargeting (priorizar México)
  upsertMeta({ name: 'geo.region', content: 'MX' });
  upsertMeta({ name: 'geo.placename', content: 'Mexico' });

    // canonical link
    try {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url.split('#')[0]);
    } catch (e) {}

    // JSON-LD structured data (Organization + WebSite)
    try {
      const jsonLdId = 'seo-json-ld';
      let existing = document.getElementById(jsonLdId);
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Maestro Valerio",
        "url": url.split('#')[0],
        "logo": image,
        "sameAs": [],
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+525652467648",
          "contactType": "customer service"
        }]
      };
      if (!existing) {
        existing = document.createElement('script');
        existing.setAttribute('type', 'application/ld+json');
        existing.setAttribute('id', jsonLdId);
        document.head.appendChild(existing);
      }
      existing.text = JSON.stringify(jsonLd);
    } catch (e) {}
  }, [title, description, image, url, theme]);

  return null;
}

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};