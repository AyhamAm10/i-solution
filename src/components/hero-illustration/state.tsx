"use client";

import { PropsWithChildren, useState, useEffect } from "react";
import { useMirrorRegistry } from "./store";

const State = (props: PropsWithChildren) => {
  const { children } = props;
  const [use3D, setUse3D] = useState(false);

  useEffect(() => {
    // For now, always use fallback for stability
    setUse3D(false);
  }, []);

  useMirrorRegistry("use3D", use3D);
  useMirrorRegistry("setUse3D", setUse3D);

  return <>{children}</>;
};

export { State };

