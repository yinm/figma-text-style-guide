import { beforeEach, describe, expect, it } from "vitest";
import { hexToRgb } from "../../utils/hexToRgb";
import { styles } from "../styles";
import { createPropertyFrame } from "./createPropertyFrame";

describe("createPropertyFrame", () => {
  beforeEach(async () => {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  });

  it("create propertyFrame with expected properties", () => {
    const properties = {
      key: "Font Family",
      value: "Helvetica",
    };
    const property = createPropertyFrame(properties);

    expect(property.name).toBe(properties.key);
    expect(property.layoutMode).toBe("HORIZONTAL");
    expect(property.itemSpacing).toBe(styles.spacing.sm);
    expect(property.layoutSizingVertical).toBe("HUG");

    const keyText = property.children[0] as TextNode;
    expect(keyText.characters).toBe(`${properties.key}: `);
    expect(keyText.fills).toStrictEqual([
      { type: "SOLID", color: hexToRgb(styles.colors.keyText) },
    ]);

    const valueText = property.children[1] as TextNode;
    expect(valueText.characters).toBe(properties.value);
  });

  it("should have a value converting to string", () => {
    const properties = {
      key: "Font Size",
      value: 18,
    };
    const property = createPropertyFrame(properties);

    const valueText = property.children[1] as TextNode;
    expect(valueText.characters).toBe(`${properties.value}`);
  });
});
