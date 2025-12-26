"use client";

import { State } from "./state";
import { UI } from "./ui";
import type { ReactNode } from "react";

interface SiteShellProps {
  children: ReactNode;
}

const Factory = ({ children }: SiteShellProps) => {
  return (
    <State>
      <UI>{children}</UI>
    </State>
  );
};

export { Factory };

