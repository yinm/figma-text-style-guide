import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("should render a button with children prop", () => {
    const children = "Create";
    render(<Button>{children}</Button>);

    const button = screen.getByRole("button", { name: children });
    expect(button.textContent).toBe(children);
  });
});
