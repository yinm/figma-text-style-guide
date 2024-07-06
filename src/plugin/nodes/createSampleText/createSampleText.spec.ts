import { describe, expect, it } from "vitest";
import { createSampleText } from "./createSampleText";

// FIXME: This tests are not working because of figma stub methods doesn't exist
// e.g. setTextStyleIdAsync
describe.skip("createSampleText", () => {
  it("create sampleText with expected properties", async () => {
    const textStyle = {
      fontName: {
        family: "Inter",
        style: "Regular",
      },
    } as TextStyle;

    const sampleText = await createSampleText(textStyle);

    expect(sampleText.characters).toBe(`Lorem ipsum dolor sit amet, elit.
aaaaaaa`);
  });
});
