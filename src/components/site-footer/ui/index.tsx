"use client";

import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";

const UI = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/isolution-logo-horizontal.svg" alt="I.Solution" width={140} height={40} className="rounded-lg object-contain" />
              <span className="text-xl font-bold">I.Solution</span>
            </div>
            <p className="text-sm text-muted-foreground">
              تعلم البرمجة بشكل عملي مع مشاريع حقيقية ومتابعة مستمرة
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">روابط سريعة</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/courses" className="hover:text-primary transition-colors">المسارات</Link>
              <Link href="/projects" className="hover:text-primary transition-colors">المشاريع</Link>
              <Link href="/about" className="hover:text-primary transition-colors">من أنا</Link>
              <Link href="/faq" className="hover:text-primary transition-colors">الأسئلة الشائعة</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">تواصل معنا</h3>
            <p className="text-sm text-muted-foreground">
              للاستفسارات والتسجيل، تواصل معنا عبر واتساب
            </p>
            <WhatsAppButton showText text="واتساب" />
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} I.Solution. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export { UI };

