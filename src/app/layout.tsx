import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "I.Solution | تعلم البرمجة بشكل عملي",
  description: "تدريب موجّه للمبتدئين: مشاريع حقيقية + منهج واضح + أسلوب قريب من طريقة العمل في الشركات",
  icons: {
    // icon: "/favicon.ico",
    // To use SVG instead, uncomment this:
    icon: "/isolution-mark.svg",
    // Or use multiple sizes:
    // icon: [
    //   { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    //   { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    // ],
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
