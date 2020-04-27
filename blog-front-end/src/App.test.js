import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// 需要重写app测试用例
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
