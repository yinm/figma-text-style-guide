import { styles } from "../styles";

interface Properties {
  name: TextStyle["name"];
  description?: TextStyle["description"];
}

export function createHeadingFrame({ name, description }: Properties) {
  const headingFrame = figma.createFrame();
  headingFrame.name = "Heading";
  headingFrame.layoutMode = "VERTICAL";
  headingFrame.itemSpacing = styles.spacing.sm;

  const nameText = figma.createText();
  headingFrame.appendChild(nameText);
  nameText.characters = name;
  nameText.fontSize = styles.fontSize.heading;

  if (typeof description === "string") {
    const descriptionText = figma.createText();
    headingFrame.appendChild(descriptionText);
    descriptionText.characters = description;
    descriptionText.layoutSizingHorizontal = "FILL";
  }

  return headingFrame;
}
