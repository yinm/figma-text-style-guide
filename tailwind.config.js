import {
  BackgroundFillPrimary,
  BackgroundFillSwitchThumb,
  BackgroundFillSwitchTrackOff,
  BackgroundPrimary,
  RadiusFull,
  RadiusLg,
  TextLabel,
  TextOnPrimary,
} from "./design-tokens/dist/tokens.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/ui/**/*.tsx"],
  theme: {
    backgroundColor: {
      primary: BackgroundPrimary,
      "fill-primary": BackgroundFillPrimary,
      "switch-thumb": BackgroundFillSwitchThumb,
      "switch-track-off": BackgroundFillSwitchTrackOff,
    },
    textColor: {
      label: TextLabel,
      "on-primary": TextOnPrimary,
    },
    borderRadius: {
      lg: RadiusLg,
      full: RadiusFull,
    },
    extend: {},
  },
  plugins: [],
};
