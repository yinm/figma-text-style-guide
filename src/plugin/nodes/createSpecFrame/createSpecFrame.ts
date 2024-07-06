import { type OutputableTextStyles } from "../../outputableTextStyles";
import { getObjectKeys } from "../../utils/getObjectKeys";
import { createPropertyFrame } from "../createPropertyFrame/createPropertyFrame";
import { styles } from "../styles";

export function createSpecFrame(textStyles: Partial<OutputableTextStyles>) {
  const specFrame = figma.createFrame();
  specFrame.name = "Spec";
  specFrame.layoutMode = "VERTICAL";
  specFrame.itemSpacing = styles.spacing.sm;
  specFrame.layoutSizingHorizontal = "FIXED";
  specFrame.layoutSizingVertical = "HUG";
  specFrame.minWidth = styles.minWidth.specFrame;

  for (const key of getObjectKeys(textStyles)) {
    switch (key) {
      case "fontName": {
        const { family, style } = textStyles.fontName!;

        specFrame.appendChild(
          createPropertyFrame({
            key: "Font Family",
            value: family,
          }),
        );
        specFrame.appendChild(
          createPropertyFrame({
            key: "Font Style",
            value: style,
          }),
        );
        break;
      }

      case "fontSize": {
        specFrame.appendChild(
          createPropertyFrame({
            key: "Font Size",
            value: textStyles.fontSize!,
          }),
        );
        break;
      }

      case "lineHeight": {
        const lineHeight = textStyles.lineHeight!;
        const key = "Line Height";

        if ("value" in lineHeight) {
          const { value, unit } = lineHeight;
          specFrame.appendChild(
            createPropertyFrame({
              key,
              value: `${value}${unit.toLowerCase()}`,
            }),
          );
        } else {
          specFrame.appendChild(
            createPropertyFrame({
              key,
              value: lineHeight.unit,
            }),
          );
        }
        break;
      }

      case "letterSpacing": {
        const { value, unit } = textStyles.letterSpacing!;
        specFrame.appendChild(
          createPropertyFrame({
            key: "Letter Spacing",
            value: `${value}${unit.toLowerCase()}`,
          }),
        );
        break;
      }

      case "paragraphSpacing": {
        specFrame.appendChild(
          createPropertyFrame({
            key: "Paragraph Spacing",
            value: textStyles.paragraphSpacing!,
          }),
        );
        break;
      }

      case "textDecoration": {
        specFrame.appendChild(
          createPropertyFrame({
            key: "Text Decoration",
            value: textStyles.textDecoration!,
          }),
        );
        break;
      }

      case "textCase": {
        specFrame.appendChild(
          createPropertyFrame({
            key: "Text Case",
            value: textStyles.textCase!,
          }),
        );
        break;
      }

      case "leadingTrim": {
        specFrame.appendChild(
          createPropertyFrame({
            key: "Leading Trim",
            value: textStyles.leadingTrim!,
          }),
        );
        break;
      }

      case "listSpacing": {
        specFrame.appendChild(
          createPropertyFrame({
            key: "List Spacing",
            value: textStyles.listSpacing!,
          }),
        );
        break;
      }

      case "hangingPunctuation": {
        specFrame.appendChild(
          createPropertyFrame({
            key: "Hanging Punctuation",
            value: textStyles.hangingPunctuation!,
          }),
        );
        break;
      }

      case "hangingList": {
        specFrame.appendChild(
          createPropertyFrame({
            key: "Hanging List",
            value: textStyles.hangingList!,
          }),
        );
        break;
      }

      case "paragraphIndent": {
        specFrame.appendChild(
          createPropertyFrame({
            key: "Paragraph Indent",
            value: textStyles.paragraphIndent!,
          }),
        );
        break;
      }

      default: {
        throw new Error(`Unexpected key: ${key satisfies never}`);
      }
    }
  }

  return specFrame;
}
