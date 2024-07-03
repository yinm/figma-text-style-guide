import { PropsWithChildren } from "react";

interface Props {
  onClick: () => void;
}

export const Button = ({ children, onClick }: PropsWithChildren<Props>) => (
  <button
    type="button"
    className="text-on-primary bg-primary rounded-lg px-4 py-2"
    onClick={onClick}
  >
    {children}
  </button>
);
