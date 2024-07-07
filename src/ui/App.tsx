import { useState } from "react";
import { Button } from "./components/Button/Button";
import { LabelAndSwitch } from "./components/LabelAndSwitch/LabelAndSwitch";

function toggleBoolean(previous: boolean) {
  return !previous;
}

function App() {
  const [fontFamily, setFontFamily] = useState(true);
  const [fontStyle, setFontStyle] = useState(true);
  const [fontSize, setFontSize] = useState(true);
  const [lineHeight, setLineHeight] = useState(true);
  const [letterSpacing, setLetterSpacing] = useState(true);
  const [paragraphSpacing, setParagraphSpacing] = useState(true);
  const [textDecoration, setTextDecoration] = useState(true);
  const [textCase, setTextCase] = useState(true);
  const [leadingTrim, setLeadingTrim] = useState(true);
  const [listSpacing, setListSpacing] = useState(true);
  const [hangingPunctuation, setHangingPunctuation] = useState(true);
  const [hangingList, setHangingList] = useState(true);
  const [paragraphIndent, setParagraphIndent] = useState(true);

  return (
    <div className="space-y-4 p-8">
      <div className="flex flex-col gap-y-2 text-label">
        <LabelAndSwitch
          label="Font Family"
          checked={fontFamily}
          toggleChecked={() => setFontFamily(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Font Style"
          checked={fontStyle}
          toggleChecked={() => setFontStyle(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Font Size"
          checked={fontSize}
          toggleChecked={() => setFontSize(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Line Height"
          checked={lineHeight}
          toggleChecked={() => setLineHeight(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Letter Spacing"
          checked={letterSpacing}
          toggleChecked={() => setLetterSpacing(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Paragraph Spacing"
          checked={paragraphSpacing}
          toggleChecked={() => setParagraphSpacing(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Text Decoration"
          checked={textDecoration}
          toggleChecked={() => setTextDecoration(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Text Case"
          checked={textCase}
          toggleChecked={() => setTextCase(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Leading Trim"
          checked={leadingTrim}
          toggleChecked={() => setLeadingTrim(toggleBoolean)}
        />

        <LabelAndSwitch
          label="List Spacing"
          checked={listSpacing}
          toggleChecked={() => setListSpacing(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Hanging Punctuation"
          checked={hangingPunctuation}
          toggleChecked={() => setHangingPunctuation(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Hanging List"
          checked={hangingList}
          toggleChecked={() => setHangingList(toggleBoolean)}
        />

        <LabelAndSwitch
          label="Paragraph Indent"
          checked={paragraphIndent}
          toggleChecked={() => setParagraphIndent(toggleBoolean)}
        />
      </div>

      <div className="flex justify-end">
        <Button
          onClick={() => {
            parent.postMessage(
              {
                pluginMessage: {
                  needToOutputTextStyles: {
                    fontFamily,
                    fontStyle,
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
                  },
                },
              },
              "*",
            );
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
}

export default App;
