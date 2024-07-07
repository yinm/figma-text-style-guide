import { createBodyFrame } from "./nodes/createBodyFrame/createBodyFrame";
import { createHeadingFrame } from "./nodes/createHeadingFrame/createHeadingFrame";
import { createSampleText } from "./nodes/createSampleText/createSampleText";
import { createSpecFrame } from "./nodes/createSpecFrame/createSpecFrame";
import { createTextStyleFrame } from "./nodes/createTextStyleFrame/createTextStyleFrame";
import { createTextStyleGuideFrame } from "./nodes/createTextStyleGuideFrame/createTextStyleGuideFrame";

figma.showUI(__html__, { width: 320, height: 640 });

figma.ui.onmessage = async () => {
  const textStyleGuide = createTextStyleGuideFrame();

  const textStyles = await figma.getLocalTextStylesAsync();
  for (const textStyle of textStyles) {
    const {
      // UI: Name
      name,

      // UI: Description
      description,

      // UI: (unlabeled)
      fontName,

      // UI: (Unlabeled)
      fontSize,

      // UI: Line height (on hover)
      lineHeight,

      // UI: Letter spacing (on hover)
      letterSpacing,

      // UI: Paragraph spacing (on hover) / Paragraph spacing (at Basics tab)
      paragraphSpacing,

      // Basics Tab -----------------------------------

      // UI: Decoration
      textDecoration,

      // UI: Case
      textCase,

      // UI: Vertical trim
      leadingTrim,

      // UI: List spacing
      listSpacing,

      // Details Tab -----------------------------------

      // UI: Hanging punctuation
      hangingPunctuation,

      // UI: Hanging lists
      hangingList,

      // UI: Paragraph indent
      paragraphIndent,
    } = textStyle;

    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    const textStyleFrame = createTextStyleFrame();
    const heading = createHeadingFrame({ name, description });
    textStyleFrame.appendChild(heading);
    // need to set layoutSizingHorizontal after appendChild. If not, an error happens.
    heading.layoutSizingHorizontal = "FILL";

    const body = createBodyFrame();
    body.appendChild(
      createSpecFrame({
        fontName,
        fontSize,
        lineHeight,
        letterSpacing,
        paragraphSpacing,
        textDecoration,
        textCase,
        leadingTrim,
        listSpacing,
        hangingPunctuation,
        hangingList,
        paragraphIndent,
      }),
    );
    body.appendChild(await createSampleText(textStyle));
    textStyleFrame.appendChild(body);

    textStyleGuide.appendChild(textStyleFrame);
    textStyleFrame.layoutSizingHorizontal = "FILL";
  }

  figma.closePlugin();
};
