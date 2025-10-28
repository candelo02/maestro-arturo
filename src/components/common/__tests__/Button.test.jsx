import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../context/ThemeContext';
import Button from '../Button';

test('renderiza el botón con texto', () => {
  render(
    <ThemeProvider>
      <Button>Click</Button>
    </ThemeProvider>
  );
  expect(screen.getByText(/Click/i)).toBeInTheDocument();
});
