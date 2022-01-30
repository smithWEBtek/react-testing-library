import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../../Counter/Counter';

describe('Counter functionality', () => {
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
});

describe("Input and counter interaction", () => {
  it("changing input value updates correctly", () => {
    render(<Counter />)
    const inputElement = screen.getByTestId("input")
    expect(inputElement.value).toBe("1")
    fireEvent.change(inputElement, { target: { value: 4 } })
    expect(inputElement.value).toBe("4")
  });

  it("click on addButton adds 1 to counter", () => {
    render(<Counter />)
    const counterElement = screen.getByTestId("counter");
    const addBtn = screen.getByTestId("add-btn")
    expect(counterElement.textContent).toBe("0")
    fireEvent.click(addBtn)
    expect(counterElement.textContent).toBe("1")
  });

  it("click on subtractButton subtracts 1 from counter", () => {
    render(<Counter />)
    const counterElement = screen.getByTestId("counter");
    const subtractBtn = screen.getByTestId("subtract-btn")
    expect(counterElement.textContent).toBe("0")
    fireEvent.click(subtractBtn)
    expect(counterElement.textContent).toBe("-1")
  });

  it("changed input value, clicked addBtn updates counter increment value", () => {
    render(<Counter />)
    const counterElement = screen.getByTestId("counter");
    const addBtn = screen.getByTestId("add-btn")
    const inputElement = screen.getByTestId("input")
    expect(counterElement.textContent).toBe("0")

    fireEvent.change(inputElement, { target: { value: 4 } })
    fireEvent.click(addBtn);
    expect(counterElement.textContent).toBe("4")
  });

  it("changed input value, clicked subtractBtn updates counter decrement value", () => {
    render(<Counter />)
    const counterElement = screen.getByTestId("counter");
    const subtractBtn = screen.getByTestId("subtract-btn")
    const inputElement = screen.getByTestId("input")
    expect(counterElement.textContent).toBe("0")

    fireEvent.change(inputElement, { target: { value: 4 } })
    fireEvent.click(subtractBtn);
    expect(counterElement.textContent).toBe("-4")
  });

  it("adding and then subtracting renders correct counter number, v1", () => {
    render(<Counter />);
    const counterElement = screen.getByTestId("counter");
    const addBtn = screen.getByTestId("add-btn")
    const subtractBtn = screen.getByTestId("subtract-btn")
    const inputElement = screen.getByTestId("input")
    expect(counterElement.textContent).toBe("0")

    fireEvent.change(inputElement, { target: { value: 4 } })
    fireEvent.click(addBtn);
    expect(counterElement.textContent).toBe("4")

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    expect(counterElement.textContent).toBe("-8")

    fireEvent.change(inputElement, { target: { value: 2 } })
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(subtractBtn);
    expect(counterElement.textContent).toBe("-6")
  });

  it("adding and then subtracting renders correct counter number, v2", () => {
    render(<Counter />);
    const subtractBtn = screen.getByTestId("subtract-btn")
    const addBtn = screen.getByTestId("add-btn")
    const counterElement = screen.getByTestId("counter");
    const inputElement = screen.getByTestId("input")
    expect(counterElement.textContent).toBe("0")

    fireEvent.change(inputElement, { target: { value: "10" } })
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    expect(counterElement.textContent).toBe("20")

    fireEvent.change(inputElement, { target: { value: "5" } })
    fireEvent.click(addBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    expect(counterElement.textContent).toBe("15")
  });

  it("changes counter color to GREEN when value is equal to or greater than 100", () => {
    render(<Counter />);
    const addBtn = screen.getByTestId("add-btn")
    const counterElement = screen.getByTestId("counter");
    const inputElement = screen.getByTestId("input")
    expect(counterElement.textContent).toBe("0")

    fireEvent.change(inputElement, { target: { value: 45 } });
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    expect(counterElement.textContent).toBe("135");
    expect(counterElement.classList.contains('green')).toBe(true);
  });

  it("changes counter color to RED when value is less than or equal to -100", () => {
    render(<Counter />);
    const subtractBtn = screen.getByTestId("subtract-btn")
    const counterElement = screen.getByTestId("counter");
    const inputElement = screen.getByTestId("input")
    expect(counterElement.textContent).toBe("0")

    fireEvent.change(inputElement, { target: { value: 45 } });
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    expect(counterElement.textContent).toBe("-135");
    expect(counterElement.classList.contains('red')).toBe(true);
  });
});
