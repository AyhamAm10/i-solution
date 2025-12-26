"use client";

import { PropsWithChildren, useState } from "react";
import { useMirrorRegistry } from "./store";
import { projects } from "@/app/data/courses";

const State = (props: PropsWithChildren) => {
  const { children } = props;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useMirrorRegistry("selectedProject", selectedProject);
  useMirrorRegistry("setSelectedProject", setSelectedProject);

  return <>{children}</>;
};

export { State };

