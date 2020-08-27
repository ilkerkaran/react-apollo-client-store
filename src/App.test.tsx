import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const a = create(<App />);
  expect(a).toMatchSnapshot();
});
