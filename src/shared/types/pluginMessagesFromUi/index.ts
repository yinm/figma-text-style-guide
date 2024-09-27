import { type NeedToOutputTextStyles } from "./NeedToOutputTextStyles";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type pluginMessagesFromUi = {
  type: "createStyleGuide";
  payload: NeedToOutputTextStyles;
};
