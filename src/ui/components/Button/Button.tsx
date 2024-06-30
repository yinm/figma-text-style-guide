import { PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => (
  <button type="button">{children}</button>
);
