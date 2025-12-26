"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMirror } from "../store";

const HomeLoadingOverlay = () => {
  const progress = useMirror("hero3dProgress");
  const loading = useMirror("hero3dLoading");
  const done = useMirror("hero3dDone");

  const show = loading && !done;

  // اقفل السكرول أثناء التحميل (اختياري لكنه يعطي تجربة أفضل)
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-[320px] rounded-2xl border border-white/10 bg-black/30 p-6 text-center shadow-xl">
            <div className="text-sm text-white/70">Loading 3D Model</div>

            <div className="mt-2 text-5xl font-semibold tabular-nums text-white">
              {progress}%
            </div>

            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "tween", duration: 0.2 }}
              />
            </div>

            <div className="mt-3 text-xs text-white/50">
              Please wait a moment…
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { HomeLoadingOverlay };
