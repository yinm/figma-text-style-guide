import {
  BackgroundFillPrimary,
  BackgroundFillSwitchThumb,
  BackgroundFillSwitchTrackOff,
  BackgroundPrimary,
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
      lg: "0.5rem",
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
};
