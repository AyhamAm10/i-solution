"use client";

import { PropsWithChildren, useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useMirrorRegistry } from "./store";

const readFromUrl = () => {
  if (typeof window === "undefined") {
    return { track: "all", level: "all" };
  }
  const sp = new URLSearchParams(window.location.search);
  return {
    track: sp.get("track") || "all",
    level: sp.get("level") || "all",
  };
};

const buildQuery = (track: string, level: string) => {
  const sp = new URLSearchParams();
  if (track && track !== "all") sp.set("track", track);
  if (level && level !== "all") sp.set("level", level);
  const qs = sp.toString();
  return qs ? `?${qs}` : "";
};

const State = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const [activeTrack, setActiveTrackState] = useState("all");
  const [activeLevel, setActiveLevelState] = useState("all");

  useEffect(() => {
    const sync = () => {
      const { track, level } = readFromUrl();
      setActiveTrackState(track);
      setActiveLevelState(level);
    };

    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  const pushUrl = useCallback(
    (track: string, level: string) => {
      router.push(`/courses${buildQuery(track, level)}`);
    },
    [router]
  );

  const setActiveTrack = useCallback(
    (trackId: string) => {
      const nextTrack = trackId || "all";
      const nextLevel = "all"; 
      setActiveTrackState(nextTrack);
      setActiveLevelState(nextLevel);
      pushUrl(nextTrack, nextLevel);
    },
    [pushUrl]
  );

  const setActiveLevel = useCallback(
    (level: string) => {
      const nextLevel = level || "all";
      setActiveLevelState(nextLevel);
      pushUrl(activeTrack, nextLevel);
    },
    [activeTrack, pushUrl]
  );

  const handleTrackFilter = useCallback(
    (trackId: string) => setActiveTrack(trackId),
    [setActiveTrack]
  );

  const handleLevelFilter = useCallback(
    (level: string) => setActiveLevel(level),
    [setActiveLevel]
  );

  // ✅ Mirror registry (ضمن طبقة state)
  useMirrorRegistry("activeTrack", activeTrack);
  useMirrorRegistry("setActiveTrack", setActiveTrack);
  useMirrorRegistry("activeLevel", activeLevel);
  useMirrorRegistry("setActiveLevel", setActiveLevel);
  useMirrorRegistry("handleTrackFilter", handleTrackFilter);
  useMirrorRegistry("handleLevelFilter", handleLevelFilter);

  return <>{children}</>;
};

export { State };
