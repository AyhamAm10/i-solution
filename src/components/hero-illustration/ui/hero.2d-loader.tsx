"use client";

import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function Hero3DLoader() {
  const { progress, active, item } = useProgress();
  const p = clamp(Math.round(progress), 0, 100);

  return (
    <Html center>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="select-none"
      >
        <div className="flex flex-col items-center gap-3">
          {/* Ring */}
          <div className="relative grid place-items-center">
            {/* glow */}
            <div className="absolute -inset-6 rounded-full bg-accent/10 blur-2xl" />

            {/* ring container */}
            <div className="relative h-20 w-20 rounded-full border border-white/10 bg-background/25 backdrop-blur-md">
              {/* spinning ring */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-20 w-20 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
              </div>

              {/* percentage */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">{p}%</div>
                  <div className="text-[10px] text-muted-foreground">Loading</div>
                </div>
              </div>
            </div>
          </div>

          {/* optional small text (you can remove) */}
          <div className="max-w-[220px] text-center text-xs text-muted-foreground">
            {active ? "جاري تحميل المجسم ثلاثي الأبعاد..." : "تحضير العرض..."}
          </div>

          {/* Debug-friendly: shows current file (optional) */}
          {/* <div className="text-[10px] text-muted-foreground/80">{item}</div> */}
        </div>
      </motion.div>
    </Html>
  );
}
