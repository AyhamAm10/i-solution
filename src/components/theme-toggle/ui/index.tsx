"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useMirror } from "../store";

const UI = () => {
  const theme = useMirror("theme");
  const setTheme = useMirror("setTheme");
  const mounted = useMirror("mounted");

  if (!mounted) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50" />
    );
  }

  const currentTheme = theme === "dark" ? "dark" : "light";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
      aria-label={currentTheme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: currentTheme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {currentTheme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

export { UI };

