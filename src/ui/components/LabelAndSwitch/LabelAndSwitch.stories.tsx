import { useState } from "react";
import { LabelAndSwitch } from "./LabelAndSwitch";

export const Default = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="w-64">
      <LabelAndSwitch
        label="Font Family"
        checked={checked}
        toggleChecked={() => setChecked((previous) => !previous)}
      />
    </div>
  );
};
