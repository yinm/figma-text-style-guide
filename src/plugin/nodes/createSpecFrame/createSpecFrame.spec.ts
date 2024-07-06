import { beforeEach, describe, expect, it } from "vitest";
import { styles } from "../styles";
import { createSpecFrame } from "./createSpecFrame";

type TextStyles = Parameters<typeof createSpecFrame>[0];

function keyDelimiter(keyText: string) {
  return `${keyText}: `;
}

describe("createSpecFrame", () => {
  beforeEach(async () => {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  });

  it("create specFrame with expected properties", () => {
    const textStyles = {
      fontName: {
        family: "Helvetica",
        style: "Regular",
      },
      fontSize: 18,
      lineHeight: {
        unit: "AUTO",
      },
      letterSpacing: {
        value: 2,
        unit: "PIXELS",
      },
      paragraphSpacing: 4,
      textDecoration: "NONE",
      textCase: "ORIGINAL",
      leadingTrim: "CAP_HEIGHT",
      listSpacing: 6,
      hangingPunctuation: true,
      hangingList: false,
      paragraphIndent: 8,
    } satisfies TextStyles;
    const spec = createSpecFrame(textStyles);

    expect(spec.name).toBe("Spec");
    expect(spec.layoutMode).toBe("VERTICAL");
    expect(spec.itemSpacing).toBe(styles.spacing.sm);
    expect(spec.layoutSizingHorizontal).toBe("FIXED");
    expect(spec.layoutSizingVertical).toBe("HUG");
    expect(spec.minWidth).toBe(styles.minWidth.specFrame);

    const [fontFamilyKey, fontFamilyValue] = (spec.children[0] as FrameNode)
      .children as TextNode[];
    expect(fontFamilyKey.characters).toBe(keyDelimiter("Font Family"));
    expect(fontFamilyValue.characters).toBe(textStyles.fontName.family);

    const [fontStyleKey, fontStyleValue] = (spec.children[1] as FrameNode)
      .children as TextNode[];
    expect(fontStyleKey.characters).toBe(keyDelimiter("Font Style"));
    expect(fontStyleValue.characters).toBe(textStyles.fontName.style);

    const [fontSizeKey, fontSizeValue] = (spec.children[2] as FrameNode)
      .children as TextNode[];
    expect(fontSizeKey.characters).toBe(keyDelimiter("Font Size"));
    expect(fontSizeValue.characters).toBe(textStyles.fontSize.toString());

    const [lineHeightKey, lineHeightValue] = (spec.children[3] as FrameNode)
      .children as TextNode[];
    expect(lineHeightKey.characters).toBe(keyDelimiter("Line Height"));
    expect(lineHeightValue.characters).toBe(textStyles.lineHeight.unit);

    const [letterSpacingKey, letterSpacingValue] = (
      spec.children[4] as FrameNode
    ).children as TextNode[];
    expect(letterSpacingKey.characters).toBe(keyDelimiter("Letter Spacing"));
    expect(letterSpacingValue.characters).toBe(
      `${textStyles.letterSpacing.value}${textStyles.letterSpacing.unit.toLowerCase()}`,
    );

    const [paragraphSpacingKey, paragraphSpacingValue] = (
      spec.children[5] as FrameNode
    ).children as TextNode[];
    expect(paragraphSpacingKey.characters).toBe(
      keyDelimiter("Paragraph Spacing"),
    );
    expect(paragraphSpacingValue.characters).toBe(
      textStyles.paragraphSpacing.toString(),
    );

    const [textDecorationKey, textDecorationValue] = (
      spec.children[6] as FrameNode
    ).children as TextNode[];
    expect(textDecorationKey.characters).toBe(keyDelimiter("Text Decoration"));
    expect(textDecorationValue.characters).toBe(textStyles.textDecoration);

    const [textCaseKey, textCaseValue] = (spec.children[7] as FrameNode)
      .children as TextNode[];
    expect(textCaseKey.characters).toBe(keyDelimiter("Text Case"));
    expect(textCaseValue.characters).toBe(textStyles.textCase);

    const [leadingTrimKey, leadingTrimValue] = (spec.children[8] as FrameNode)
      .children as TextNode[];
    expect(leadingTrimKey.characters).toBe(keyDelimiter("Leading Trim"));
    expect(leadingTrimValue.characters).toBe(textStyles.leadingTrim);

    const [listSpacingKey, listSpacingValue] = (spec.children[9] as FrameNode)
      .children as TextNode[];
    expect(listSpacingKey.characters).toBe(keyDelimiter("List Spacing"));
    expect(listSpacingValue.characters).toBe(textStyles.listSpacing.toString());

    const [hangingPunctuationKey, hangingPunctuationValue] = (
      spec.children[10] as FrameNode
    ).children as TextNode[];
    expect(hangingPunctuationKey.characters).toBe(
      keyDelimiter("Hanging Punctuation"),
    );
    expect(hangingPunctuationValue.characters).toBe(
      textStyles.hangingPunctuation.toString(),
    );

    const [hangingListKey, hangingListValue] = (spec.children[11] as FrameNode)
      .children as TextNode[];
    expect(hangingListKey.characters).toBe(keyDelimiter("Hanging List"));
    expect(hangingListValue.characters).toBe(textStyles.hangingList.toString());

    const [paragraphIndentKey, paragraphIndentValue] = (
      spec.children[12] as FrameNode
    ).children as TextNode[];
    expect(paragraphIndentKey.characters).toBe(
      keyDelimiter("Paragraph Indent"),
    );
    expect(paragraphIndentValue.characters).toBe(
      textStyles.paragraphIndent.toString(),
    );
  });

  it("can create specFrame with lineHeight value", () => {
    const textStyles = {
      lineHeight: {
        value: 24,
        unit: "PIXELS",
      },
    } satisfies TextStyles;
    const spec = createSpecFrame(textStyles);

    const lineHeight = spec.children[0] as FrameNode;
    const lineHeightKey = lineHeight.children[0] as TextNode;
    expect(lineHeightKey.characters).toBe(keyDelimiter("Line Height"));
    const lineHeightValue = lineHeight.children[1] as TextNode;
    expect(lineHeightValue.characters).toBe(
      `${textStyles.lineHeight.value}${textStyles.lineHeight.unit.toLowerCase()}`,
    );
  });
});
