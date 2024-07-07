import { ComponentPropsWithoutRef } from "react";
import { Switch } from "../Switch/Switch";

type Props = {
  label: string;
} & ComponentPropsWithoutRef<typeof Switch>;

export function LabelAndSwitch({ label, checked, toggleChecked }: Props) {
  return (
    <label className="flex items-center justify-between py-1">
      <span>{label}</span>
      <Switch checked={checked} toggleChecked={toggleChecked} />
    </label>
  );
}
