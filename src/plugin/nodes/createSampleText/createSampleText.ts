export async function createSampleText({
  fontName,
  id,
  listSpacing,
  hangingList,
  hangingPunctuation,
}: TextStyle) {
  await figma.loadFontAsync({
    family: fontName.family,
    style: fontName.style,
  });

  const sampleText = figma.createText();
  await sampleText.setTextStyleIdAsync(id);
  sampleText.characters = `Lorem ipsum dolor sit amet, elit.
aaaaaaa`;

  if (listSpacing !== 0 || hangingList) {
    sampleText.setRangeListOptions(0, sampleText.characters.length, {
      type: "ORDERED",
    });
  }

  if (hangingPunctuation) {
    sampleText.characters = `"${sampleText.characters}`;
  }

  return sampleText;
}
