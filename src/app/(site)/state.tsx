"use client";

import { PropsWithChildren } from "react";
import { useProgress } from "@react-three/drei";
import { useMirrorRegistry } from "./store";

const State = (props: PropsWithChildren) => {
  const { children } = props;

  const { active, progress } = useProgress();

  const p = Math.max(0, Math.min(100, Math.round(progress)));
  const loading = active || (p > 0 && p < 100);
  const done = !loading && p >= 100;

  useMirrorRegistry("hero3dProgress", p, "value");
  useMirrorRegistry("hero3dLoading", loading, "value");
  useMirrorRegistry("hero3dDone", done, "value");

  return <>{children}</>;
};

export { State };
