import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المسارات التدريبية | I.Solution",
  description: "اختر المسار التدريبي المناسب لك: Frontend مع React/Next.js، Backend مع Node/Express، أو المسار المتكامل Full-Stack",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

