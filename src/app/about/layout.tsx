import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من أنا | I.Solution",
  description: "مطور Full-Stack بخبرة في React/Next.js و Node/Express. أسلوب تدريب عملي مع مشاريع حقيقية ومتابعة مستمرة",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

