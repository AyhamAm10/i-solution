"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "../utils";

interface WhatsAppButtonProps {
  className?: string;
  showText?: boolean;
  text?: string;
  customMessage?: string;
}

const WhatsAppButton = ({ 
  className = "", 
  showText = false, 
  text = "تواصل عبر واتساب",
  customMessage 
}: WhatsAppButtonProps) => {
  return (
    <motion.a
      href={getWhatsAppLink(customMessage)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#128C7E] ${className}`}
      style={{
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)"
      }}
    >
      <MessageCircle className="h-5 w-5" />
      {showText && <span>{text}</span>}
    </motion.a>
  );
};

const StickyWhatsAppButton = () => {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="whatsapp-btn bottom-6 left-6 h-14 w-14 md:h-16 md:w-16"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="h-7 w-7 text-white md:h-8 md:w-8" />
    </motion.a>
  );
};

export { WhatsAppButton, StickyWhatsAppButton };

