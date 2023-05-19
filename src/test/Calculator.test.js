import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';
import App from '../App';

describe('test Calculator', () => {
  it('Should render correctly', () => {
    const { getByDisplayValue } = render(<Calculator />);
    expect(getByDisplayValue('AC')).toBeInTheDocument();
    expect(getByDisplayValue('+/-')).toBeInTheDocument();
    expect(getByDisplayValue('%')).toBeInTheDocument();
    expect(getByDisplayValue('÷')).toBeInTheDocument();
    expect(getByDisplayValue('x')).toBeInTheDocument();
    expect(getByDisplayValue('-')).toBeInTheDocument();
    expect(getByDisplayValue('+')).toBeInTheDocument();
    expect(getByDisplayValue('.')).toBeInTheDocument();
    expect(getByDisplayValue('=')).toBeInTheDocument();
  });
});

test('Snapshot test', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
