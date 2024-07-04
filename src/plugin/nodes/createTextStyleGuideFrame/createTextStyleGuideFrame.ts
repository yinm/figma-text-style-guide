import { styles } from "../styles";

export function createTextStyleGuideFrame() {
  const textStyleGuideFrame = figma.createFrame();
  textStyleGuideFrame.name = "TextStyleGuide";
  textStyleGuideFrame.layoutMode = "VERTICAL";
  textStyleGuideFrame.itemSpacing = styles.spacing.lg;
  textStyleGuideFrame.layoutSizingHorizontal = "HUG";
  textStyleGuideFrame.horizontalPadding = styles.spacing.xl;
  textStyleGuideFrame.verticalPadding = styles.spacing.xl;

  return textStyleGuideFrame;
}
