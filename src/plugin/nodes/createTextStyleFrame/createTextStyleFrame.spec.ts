import { describe, expect, it } from "vitest";
import { styles } from "../styles";
import { createTextStyleFrame } from "./createTextStyleFrame";

describe("createTextStyleFrame", () => {
  it("create textStyleFrame with expected properties", () => {
    const textStyle = createTextStyleFrame();

    expect(textStyle.name).toBe("TextStyle");
    expect(textStyle.layoutMode).toBe("VERTICAL");
    expect(textStyle.itemSpacing).toBe(styles.spacing.md);
  });
});
