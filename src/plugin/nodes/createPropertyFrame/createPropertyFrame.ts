import { hexToRgb } from "../../utils/hexToRgb";
import { styles } from "../styles";

interface Properties {
  key: string;
  value: string | number;
}

export function createPropertyFrame({ key, value }: Properties) {
  const propertyFrame = figma.createFrame();
  propertyFrame.name = key;
  propertyFrame.layoutMode = "HORIZONTAL";
  propertyFrame.itemSpacing = styles.spacing.sm;
  propertyFrame.layoutSizingVertical = "HUG";

  const keyText = figma.createText();
  propertyFrame.appendChild(keyText);
  keyText.characters = `${key}: `;
  keyText.fills = [{ type: "SOLID", color: hexToRgb(styles.colors.keyText) }];

  const valueText = figma.createText();
  propertyFrame.appendChild(valueText);
  valueText.characters = value.toString();

  return propertyFrame;
}
