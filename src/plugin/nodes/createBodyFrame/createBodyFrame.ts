import { styles } from "../styles";

export function createBodyFrame() {
  const bodyFrame = figma.createFrame();
  bodyFrame.name = "Body";
  bodyFrame.layoutMode = "HORIZONTAL";
  bodyFrame.itemSpacing = styles.spacing.xl;
  bodyFrame.layoutSizingVertical = "HUG";

  return bodyFrame;
}
