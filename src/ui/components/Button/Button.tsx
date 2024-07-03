import { PropsWithChildren } from "react";

interface Props {
  onClick: () => void;
}

export const Button = ({ children, onClick }: PropsWithChildren<Props>) => (
  <button
    type="button"
    className="rounded-lg bg-primary px-4 py-2 text-on-primary"
    onClick={onClick}
  >
    {children}
  </button>
);
