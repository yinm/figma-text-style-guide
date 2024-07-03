import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("should render a button with children prop", () => {
    const children = "Create";
    render(<Button onClick={() => undefined}>{children}</Button>);

    const button = screen.getByRole("button", { name: children });
    expect(button.textContent).toBe(children);
  });

  it("should handle click event", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
