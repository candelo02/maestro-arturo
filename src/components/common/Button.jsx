import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const { theme } = useTheme();
  
  const baseStyles = 'px-4 py-2 rounded-lg transition-all duration-300 font-medium';
  const variants = {
    primary: `bg-accent text-white hover:shadow-glow ${theme === 'dark' ? 'hover:bg-orange-500' : 'hover:bg-orange-600'}`,
    secondary: `border-2 border-accent text-accent hover:bg-accent hover:text-white ${theme === 'dark' ? 'hover:shadow-glow' : ''}`,
    ghost: `bg-transparent hover:bg-accent/10 text-accent`,
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
};