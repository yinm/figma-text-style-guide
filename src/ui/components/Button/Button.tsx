import { PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => (
  <button
    type="button"
    className="text-on-primary bg-primary rounded-lg px-4 py-2"
  >
    {children}
  </button>
);
