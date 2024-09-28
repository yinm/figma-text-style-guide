export const outputableTextStylesKeys = [
  "fontName",
  "fontSize",
  "lineHeight",
  "letterSpacing",
  "paragraphSpacing",
  "textDecoration",
  "textCase",
  "leadingTrim",
  "listSpacing",
  "hangingPunctuation",
  "hangingList",
  "paragraphIndent",
] as const;

type OutputableTextStylesKeys = (typeof outputableTextStylesKeys)[number];
export type OutputableTextStyles = Pick<TextStyle, OutputableTextStylesKeys>;
