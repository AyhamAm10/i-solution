"use client";

import { PropsWithChildren, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useMirrorRegistry } from "./store";
import { tracks } from "@/app/data/courses";

const State = (props: PropsWithChildren) => {
  const { children } = props;
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTrack = searchParams.get("track") || "all";
  const activeLevel = searchParams.get("level") || "all";

  const handleTrackFilter = (trackId: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (trackId === "all") {
      newParams.delete("track");
    } else {
      newParams.set("track", trackId);
    }
    newParams.delete("level");
    router.push(`/courses?${newParams.toString()}`);
  };

  const handleLevelFilter = (level: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (level === "all") {
      newParams.delete("level");
    } else {
      newParams.set("level", level);
    }
    router.push(`/courses?${newParams.toString()}`);
  };

  useMirrorRegistry("activeTrack", activeTrack);
  useMirrorRegistry("setActiveTrack", () => {});
  useMirrorRegistry("activeLevel", activeLevel);
  useMirrorRegistry("setActiveLevel", () => {});
  useMirrorRegistry("handleTrackFilter", handleTrackFilter);
  useMirrorRegistry("handleLevelFilter", handleLevelFilter);

  return <>{children}</>;
};

export { State };

