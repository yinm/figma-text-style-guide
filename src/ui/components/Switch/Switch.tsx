import clsx from "clsx";

interface Props {
  checked: boolean;
  toggleChecked: () => void;
}

export function Switch({ checked, toggleChecked }: Props) {
  return (
    <div className="relative inline-block">
      <span
        data-testid="switch-track"
        className={clsx(
          ["inline-flex h-3 w-6 rounded-full p-[1px]"],
          checked ? "bg-fill-primary" : "bg-switch-track-off",
        )}
        onClick={toggleChecked}
      >
        <span
          className={clsx(
            [
              "h-[10px] w-[10px] rounded-[inherit] bg-switch-thumb transition-transform",
            ],
            checked ? "translate-x-3" : "translate-x-0",
          )}
        />
      </span>
    </div>
  );
}
