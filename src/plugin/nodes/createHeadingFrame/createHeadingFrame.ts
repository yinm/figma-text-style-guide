import { styles } from "../styles";

interface Properties {
  name: TextStyle["name"];
  description: TextStyle["description"];
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

  if (description !== "") {
    const descriptionText = figma.createText();
    // need to set characters before appendChild, If not, width is 0.
    descriptionText.characters = description;
    headingFrame.appendChild(descriptionText);
    // need to set layoutSizingHorizontal after appendChild. If not, an error happens.
    descriptionText.layoutSizingHorizontal = "FILL";
  }

  return headingFrame;
}
