import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('sanity check', () => {
    expect(true).toBe(true);
})

test('renders App', () => {
  render(<App />);
  expect(<App />).not.toBeNull();
});

describe('displays phone number and title', () => {
  test('displays title', () => {
    render(<App />)
    const title = screen.getByText(/chris's website/i)
    expect(title).toBeTruthy()
    expect(title).not.toBeNull()
  })
  test('displays phone number', () => {
    render(<App />)
    const phone = screen.getByText(/497-2241/i)
    const phone1 = screen.getByText(/\(423\) 497-2241/i)
    expect(phone).toBeTruthy()
    expect(phone1).toBeTruthy()
  })
})