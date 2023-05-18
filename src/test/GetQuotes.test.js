import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import GetQuotes from '../components/GetQuotes';

describe('Show fetched quotes', () => {
  it('Should display loading', () => {
    const { getByText } = render(<GetQuotes />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
