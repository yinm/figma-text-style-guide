import { beforeEach, describe, expect, it } from "vitest";
import { styles } from "../styles";
import { createHeadingFrame } from "./createHeadingFrame";

describe("createHeadingFrame", () => {
  beforeEach(async () => {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  });

  it("create headingFrame with expected properties", () => {
    const properties = {
      name: "text style name",
      description: "this is a description for text style",
    };
    const heading = createHeadingFrame(properties);

    expect(heading.name).toBe("Heading");
    expect(heading.layoutMode).toBe("VERTICAL");
    expect(heading.itemSpacing).toBe(styles.spacing.sm);

    const nameText = heading.children[0] as TextNode;
    expect(nameText.characters).toBe(properties.name);
    expect(nameText.fontSize).toBe(styles.fontSize.heading);

    const descriptionText = heading.children[1] as TextNode;
    expect(descriptionText.characters).toBe(properties.description);
  });

  it("does not create description text if description does not exist", () => {
    const properties = {
      name: "text style name",
    };
    const heading = createHeadingFrame(properties);

    expect(heading.children.length).toBe(1);
    const nameText = heading.children[0] as TextNode;
    expect(nameText.characters).toBe(properties.name);
  });
});
