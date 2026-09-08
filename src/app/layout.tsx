import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "I.Solution | تعلم البرمجة بشكل عملي",
  description: "تدريب موجّه للمبتدئين: مشاريع حقيقية + منهج واضح + أسلوب قريب من طريقة العمل في الشركات",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
