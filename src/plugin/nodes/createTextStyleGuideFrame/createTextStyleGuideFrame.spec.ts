import { describe, expect, it } from "vitest";
import { styles } from "../styles";
import { createTextStyleGuideFrame } from "./createTextStyleGuideFrame";

describe("createTextStyleGuideFrame", () => {
  it("create textStyleGuideFrame with expected properties", () => {
    const textStyleGuide = createTextStyleGuideFrame();

    expect(textStyleGuide.name).toBe("TextStyleGuide");
    expect(textStyleGuide.layoutMode).toBe("VERTICAL");
    expect(textStyleGuide.itemSpacing).toBe(styles.spacing.lg);
    expect(textStyleGuide.layoutSizingHorizontal).toBe("HUG");
    expect(textStyleGuide.horizontalPadding).toBe(styles.spacing.xl);
    expect(textStyleGuide.verticalPadding).toBe(styles.spacing.xl);
  });
});
