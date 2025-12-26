"use client";

import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyWhatsAppButton } from "@/components/whatsapp-button";

interface SiteShellProps {
  children: ReactNode;
}

const UI = ({ children }: SiteShellProps) => {
  return (
    <div className="flex min-h-screen flex-col" dir="rtl" lang="ar">
      <SiteHeader />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <SiteFooter />
      <StickyWhatsAppButton />
    </div>
  );
};

export { UI };

