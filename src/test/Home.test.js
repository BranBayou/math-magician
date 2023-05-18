import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  it('Should display welcome page', () => {
    const { getByText } = render(<Home />);
    const p = document.querySelector('p');
    expect(getByText('Welcome to our page!')).toBeInTheDocument();
    expect(p.textContent).not.toBe('');
  });
});
