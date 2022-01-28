import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from '../../Counter/Counter';

it("renders header with correct text", () => {
  render(<Counter />);
  const headerElement = screen.getByTestId("header");
  expect(headerElement.textContent).toBe("My Counter");
})

it("renders the counter starting at zero", () => {
  render(<Counter />);
  const counterElement = screen.getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
});

it("render input with initial value of 1", () => {
  render(<Counter />);
  const inputElement = screen.getByTestId("input")

  expect(inputElement.value).toBe("1");
});

it("add button renders with +", () => {
  render(<Counter />);
  const addBtn = screen.getByTestId("add-btn")

  expect(addBtn.textContent).toBe("+");
});

it("subtract button renders with -", () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId("subtract-btn")

  expect(subtractBtn.textContent).toBe("-");
});
