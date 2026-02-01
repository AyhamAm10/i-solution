import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const FreeBadge = ({ text = "مجانًا" }: { text?: string }) => {
  return (
    <div className=" right-4 top-4 z-10">
      {/* Soft glow */}
      <motion.div
        aria-hidden
        className=" inset-0 rounded-full blur-md bg-accent/30"
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pill */}
      <motion.div
        className="relative inline-flex items-center gap-2 rounded-full border border-accent/35 bg-background/40 px-3 py-1 text-xs font-bold text-accent backdrop-blur-md"
        initial={{ y: -6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/15"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="h-3.5 w-3.5" />
        </motion.span>

        <span>{text}</span>

        {/* Tiny moving dot */}
        <motion.span
          className="ml-1 h-1.5 w-1.5 rounded-full bg-accent"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};
