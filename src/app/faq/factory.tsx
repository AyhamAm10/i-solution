"use client";

import { State } from "./state";
import { UIFactory } from "./ui/factory";

const Factory = () => {
  return (
    <State>
      <UIFactory />
    </State>
  );
};

export { Factory };

