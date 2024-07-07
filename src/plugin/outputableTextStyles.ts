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

export interface NeedToOutputTextStyles {
  fontFamily: boolean;
  fontStyle: boolean;
  fontSize: boolean;
  lineHeight: boolean;
  letterSpacing: boolean;
  paragraphSpacing: boolean;
  textDecoration: boolean;
  textCase: boolean;
  leadingTrim: boolean;
  listSpacing: boolean;
  hangingPunctuation: boolean;
  hangingList: boolean;
  paragraphIndent: boolean;
}
