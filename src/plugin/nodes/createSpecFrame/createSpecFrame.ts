import {
  type NeedToOutputTextStyles,
  type OutputableTextStyles,
} from "../../outputableTextStyles";
import { getObjectKeys } from "../../utils/getObjectKeys";
import { createPropertyFrame } from "../createPropertyFrame/createPropertyFrame";
import { styles } from "../styles";

export function createSpecFrame(
  textStyles: Partial<OutputableTextStyles>,
  needToOutputProperties: NeedToOutputTextStyles,
) {
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

        if (needToOutputProperties.fontFamily) {
          specFrame.appendChild(
            createPropertyFrame({
              key: "Font Family",
              value: family,
            }),
          );
        }

        if (needToOutputProperties.fontStyle) {
          specFrame.appendChild(
            createPropertyFrame({
              key: "Font Style",
              value: style,
            }),
          );
        }

        break;
      }

      case "fontSize": {
        if (!needToOutputProperties.fontSize) break;

        specFrame.appendChild(
          createPropertyFrame({
            key: "Font Size",
            value: textStyles.fontSize!,
          }),
        );
        break;
      }

      case "lineHeight": {
        if (!needToOutputProperties.lineHeight) break;

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
        if (!needToOutputProperties.letterSpacing) break;

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
        if (!needToOutputProperties.paragraphSpacing) break;

        specFrame.appendChild(
          createPropertyFrame({
            key: "Paragraph Spacing",
            value: textStyles.paragraphSpacing!,
          }),
        );
        break;
      }

      case "textDecoration": {
        if (!needToOutputProperties.textDecoration) break;

        specFrame.appendChild(
          createPropertyFrame({
            key: "Text Decoration",
            value: textStyles.textDecoration!,
          }),
        );
        break;
      }

      case "textCase": {
        if (!needToOutputProperties.textCase) break;

        specFrame.appendChild(
          createPropertyFrame({
            key: "Text Case",
            value: textStyles.textCase!,
          }),
        );
        break;
      }

      case "leadingTrim": {
        if (!needToOutputProperties.leadingTrim) break;

        specFrame.appendChild(
          createPropertyFrame({
            key: "Leading Trim",
            value: textStyles.leadingTrim!,
          }),
        );
        break;
      }

      case "listSpacing": {
        if (!needToOutputProperties.listSpacing) break;

        specFrame.appendChild(
          createPropertyFrame({
            key: "List Spacing",
            value: textStyles.listSpacing!,
          }),
        );
        break;
      }

      case "hangingPunctuation": {
        if (!needToOutputProperties.hangingPunctuation) break;

        specFrame.appendChild(
          createPropertyFrame({
            key: "Hanging Punctuation",
            value: textStyles.hangingPunctuation!,
          }),
        );
        break;
      }

      case "hangingList": {
        if (!needToOutputProperties.hangingList) break;

        specFrame.appendChild(
          createPropertyFrame({
            key: "Hanging List",
            value: textStyles.hangingList!,
          }),
        );
        break;
      }

      case "paragraphIndent": {
        if (!needToOutputProperties.paragraphIndent) break;

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
