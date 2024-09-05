import { PropsWithChildren } from "react";

interface Props {
  onClick: () => void;
}

export function Button({ children, onClick }: PropsWithChildren<Props>) {
  return (
    <button
      type="button"
      className="rounded-lg bg-fill-primary px-4 py-2 text-on-primary"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
