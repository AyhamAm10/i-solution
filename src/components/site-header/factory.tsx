"use client";

import { State } from "./state";
import { UI } from "./ui";

const Factory = () => {
  return (
    <State>
      <UI />
    </State>
  );
};

export { Factory };

