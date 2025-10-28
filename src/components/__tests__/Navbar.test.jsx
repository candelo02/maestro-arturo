import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('renderiza el título del navbar', () => {
  render(<Navbar />);
  const title = screen.getByText(/Maestro/i);
  expect(title).toBeInTheDocument();
});
