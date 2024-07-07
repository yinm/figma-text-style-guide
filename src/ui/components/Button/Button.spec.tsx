import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { noop } from "../../tests/noop";
import { Button } from "./Button";

describe("Button", () => {
  it("should render a button with children prop", () => {
    const children = "Create";
    render(<Button onClick={noop}>{children}</Button>);

    const button = screen.getByRole("button", { name: children });

    expect(button.textContent).toBe(children);
  });

  it("should handle click event", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalled();
  });
});
