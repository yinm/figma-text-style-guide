import { styles } from "../styles";

export function createTextStyleFrame() {
  const textStyleFrame = figma.createFrame();
  textStyleFrame.name = "TextStyle";
  textStyleFrame.layoutMode = "VERTICAL";
  textStyleFrame.itemSpacing = styles.spacing.md;

  return textStyleFrame;
}
