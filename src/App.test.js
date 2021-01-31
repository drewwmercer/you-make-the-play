import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Testing sum', () => {
  function sum(a, b) {
     return a + b;
  }

  it('should equal 4',()=>{
     expect(sum(2,2)).toBe(4);
    })

  test('also should equal 4', () => {
      expect(sum(2,2)).toBe(4);
    }) 
});
