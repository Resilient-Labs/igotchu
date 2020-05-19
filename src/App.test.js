import React from 'react';
import { render } from '@testing-library/react';
import Landing_App from './Landing_App';

test('renders learn react link', () => {
  const { getByText } = render(<Landing_App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
