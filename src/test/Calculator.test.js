import '@testing-library/jest-dom';
import { getByDisplayValue, render } from '@testing-library/react';
import Calculator from '../components/Calculator';

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
