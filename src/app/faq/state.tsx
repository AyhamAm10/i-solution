"use client";

import { PropsWithChildren } from "react";

const State = (props: PropsWithChildren) => {
  const { children } = props;
  return <>{children}</>;
};

export { State };

