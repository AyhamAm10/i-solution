"use client";

import { PropsWithChildren, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMirrorRegistry } from "./store";

const State = (props: PropsWithChildren) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useMirrorRegistry("isOpen", isOpen);
  useMirrorRegistry("setIsOpen", setIsOpen);
  useMirrorRegistry("pathname", pathname);
  useMirrorRegistry("setPathname", () => {}); // Not used, but required for type

  return <>{children}</>;
};

export { State };

