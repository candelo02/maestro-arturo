import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function Section({ 
  id, 
  children, 
  className = '',
  threshold = 0.3 
}) {
Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  threshold: PropTypes.number,
};
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold });
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    if (isIntersecting) {
      setActiveSection(id);
    }
  }, [isIntersecting, id, setActiveSection]);

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen py-16 ${className}`}
    >
      {children}
    </section>
  );
}