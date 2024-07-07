import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("should handle click event", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Switch checked={false} toggleChecked={handleClick} />);

    await user.click(screen.getByTestId("switch-track"));

    expect(handleClick).toHaveBeenCalled();
  });
});
