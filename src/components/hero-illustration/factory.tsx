"use client";

import { State } from "./state";
import { Hero3D } from "./ui";

const Factory = () => {
  return (
    <State>
      <Hero3D />
    </State>
  );
};

export { Factory };

