import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Switch } from './Switch';

describe("Switch", () => {
  it("test", () => {
    render(<Switch example="test" />);

    const component = screen.getByText('test');
    expect(component.textContent).toBe('test');
  });
});
