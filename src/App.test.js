import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CounterApp from "./component/CounterApp";

describe("CounterApp", () => {
  test("1. increments the counter on button click", () => {
    render(<CounterApp />);
    const incrementButton = screen.getByText("Increment");

    fireEvent.click(incrementButton);

    const counterValue = screen.getByText(/Counter: (\d+)/i);
    expect(counterValue.textContent).toBe("Counter: 1");
  });

  test("2. decrements the counter on button click if counter is greater than 0", () => {
    render(<CounterApp />);
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(decrementButton);

    const counterValue = screen.getByText(/Counter: (\d+)/i);
    expect(counterValue.textContent).toBe("Counter: 0");
  });

  test("3. does not decrement the counter below 0", () => {
    render(<CounterApp />);
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    const counterValue = screen.getByText(/Counter: (\d+)/i);
    expect(counterValue.textContent).toBe("Counter: 0");
  });

  test("4. increments the counter multiple times on multiple button clicks", () => {
    render(<CounterApp />);
    const incrementButton = screen.getByText("Increment");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const counterValue = screen.getByText(/Counter: (\d+)/i);
    expect(counterValue.textContent).toBe("Counter: 3");
  });

  test("5. resets the counter to 0 on button click", () => {
    render(<CounterApp />);
    const incrementButton = screen.getByText("Increment");
    const resetButton = screen.getByText("Reset");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);

    const counterValue = screen.getByText(/Counter: (\d+)/i);
    expect(counterValue.textContent).toBe("Counter: 0");
  });
});
