import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LabelAndSwitch } from './LabelAndSwitch';

describe("LabelAndSwitch", () => {
  it("test", () => {
    render(<LabelAndSwitch example="test" />);

    const component = screen.getByText('test');
    expect(component.textContent).toBe('test');
  });
});
