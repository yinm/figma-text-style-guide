import { describe, expect, it } from "vitest";
import { styles } from "../styles";
import { createBodyFrame } from "./createBodyFrame";

describe("createBodyFrame", () => {
  it("create bodyFrame with expected properties", () => {
    const body = createBodyFrame();
    expect(body.name).toBe("Body");
    expect(body.layoutMode).toBe("HORIZONTAL");
    expect(body.itemSpacing).toBe(styles.spacing.xl);
    expect(body.layoutSizingVertical).toBe("HUG");
  });
});
