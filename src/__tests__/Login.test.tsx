import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../components/Form";

test("email input should be rendered", () => {
  render(<Form />);
  const emailInputEl = screen.getByPlaceholderText<HTMLElement>(/Email/i);
  expect(emailInputEl).toBeInTheDocument();
});

test("email input should be empty", () => {
  render(<Form />);
  const emailInputEl = screen.getByPlaceholderText<HTMLInputElement>(/Email/i);
  expect(emailInputEl.value).toBe("");
});

test("password input should be rendered", () => {
  render(<Form />);
  const passwordInputEl = screen.getByPlaceholderText<HTMLElement>(/Password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("password input should be empty", () => {
  render(<Form />);
  const passwordInputEl =
    screen.getByPlaceholderText<HTMLInputElement>(/Password/i);
  expect(passwordInputEl.value).toBe("");
});

test("button sign in should be rendered", () => {
  render(<Form />);
  const buttonInputEl = screen.getByRole<HTMLButtonElement>("button");
  const buttonText = screen.getByText("Sign In");
  expect(buttonInputEl).toBeInTheDocument();
  expect(buttonInputEl).toBeDisabled();
  expect(buttonText).toBeInTheDocument();
});

test("email input should be change", () => {
  render(<Form />);
  const emailInputEl = screen.getByPlaceholderText<HTMLInputElement>(/Email/i);
  const testValue = "test";
  fireEvent.change(emailInputEl, { target: { value: testValue } });
  expect(emailInputEl.value).toBe(testValue);
});

test("password input should be change", () => {
  render(<Form />);
  const passwordInputEl =
    screen.getByPlaceholderText<HTMLInputElement>(/Password/i);
  const testValue = "test";
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("button should not be disabled when inputs exist", () => {
  render(<Form />);
  const buttonEl = screen.getByRole<HTMLButtonElement>("button");
  const emailInputEl = screen.getByPlaceholderText(/Email/i);
  const passwordInputEl = screen.getByPlaceholderText(/Password/i);

  const testValue = "test";

  fireEvent.change(emailInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});
