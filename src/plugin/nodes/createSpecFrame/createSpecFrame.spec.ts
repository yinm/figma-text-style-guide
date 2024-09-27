import { beforeEach, describe, expect, it } from "vitest";
import { styles } from "../styles";
import { createSpecFrame } from "./createSpecFrame";

type TextStyles = Parameters<typeof createSpecFrame>[0];
type NeedToOutputTextStyles = Parameters<typeof createSpecFrame>[1];

function keyDelimiter(keyText: string) {
  return `${keyText}: `;
}

function includeKeyText(spec: FrameNode, keyText: string) {
  return spec.children.some((child) => {
    const textNode = (child as FrameNode).children[0] as TextNode;
    return textNode.characters === keyDelimiter(keyText);
  });
}

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

const needToOutputProperties = {
  fontFamily: true,
  fontStyle: true,
  fontSize: true,
  lineHeight: true,
  letterSpacing: true,
  paragraphSpacing: true,
  textDecoration: true,
  textCase: true,
  leadingTrim: true,
  listSpacing: true,
  hangingPunctuation: true,
  hangingList: true,
  paragraphIndent: true,
} satisfies NeedToOutputTextStyles;

describe("createSpecFrame", () => {
  beforeEach(async () => {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  });

  it("create specFrame with expected properties", () => {
    const spec = createSpecFrame(textStyles, needToOutputProperties);

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
    const spec = createSpecFrame(textStyles, needToOutputProperties);

    const lineHeight = spec.children[0] as FrameNode;
    const lineHeightKey = lineHeight.children[0] as TextNode;
    expect(lineHeightKey.characters).toBe(keyDelimiter("Line Height"));
    const lineHeightValue = lineHeight.children[1] as TextNode;
    expect(lineHeightValue.characters).toBe(
      `${textStyles.lineHeight.value}${textStyles.lineHeight.unit.toLowerCase()}`,
    );
  });

  describe("when needToOutputProperties is false, does not output text style", () => {
    it("fontFamily", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        fontFamily: false,
      });

      expect(includeKeyText(spec, "Font Family")).toBe(false);
    });

    it("fontStyle", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        fontStyle: false,
      });

      expect(includeKeyText(spec, "Font Style")).toBe(false);
    });

    it("fontSize", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        fontSize: false,
      });

      expect(includeKeyText(spec, "Font Size")).toBe(false);
    });

    it("lineHeight", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        lineHeight: false,
      });

      expect(includeKeyText(spec, "Line Height")).toBe(false);
    });

    it("letterSpacing", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        letterSpacing: false,
      });

      expect(includeKeyText(spec, "Letter Spacing")).toBe(false);
    });

    it("paragraphSpacing", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        paragraphSpacing: false,
      });

      expect(includeKeyText(spec, "Paragraph Spacing")).toBe(false);
    });

    it("textDecoration", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        textDecoration: false,
      });

      expect(includeKeyText(spec, "Text Decoration")).toBe(false);
    });

    it("textCase", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        textCase: false,
      });

      expect(includeKeyText(spec, "Text Case")).toBe(false);
    });

    it("leadingTrim", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        leadingTrim: false,
      });

      expect(includeKeyText(spec, "Leading Trim")).toBe(false);
    });

    it("listSpacing", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        listSpacing: false,
      });

      expect(includeKeyText(spec, "List Spacing")).toBe(false);
    });

    it("hangingPunctuation", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        hangingPunctuation: false,
      });

      expect(includeKeyText(spec, "Hanging Punctuation")).toBe(false);
    });

    it("hangingList", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        hangingList: false,
      });

      expect(includeKeyText(spec, "Hanging List")).toBe(false);
    });

    it("paragraphIndent", () => {
      const spec = createSpecFrame(textStyles, {
        ...needToOutputProperties,
        paragraphIndent: false,
      });

      expect(includeKeyText(spec, "Paragraph Indent")).toBe(false);
    });
  });
});
