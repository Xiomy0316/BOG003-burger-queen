import { render, screen } from '@testing-library/react';
import Home from './home/home.jsx';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/La Catrina/i);
  expect(linkElement).toBeInTheDocument();
});
