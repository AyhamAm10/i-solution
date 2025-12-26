"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useMirrorRegistry } from "./store";

const State = (props: PropsWithChildren) => {
  const { children } = props;
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMirrorRegistry("theme", theme);
  useMirrorRegistry("setTheme", setTheme);
  useMirrorRegistry("mounted", mounted);
  useMirrorRegistry("setMounted", setMounted);

  return <>{children}</>;
};

export { State };

