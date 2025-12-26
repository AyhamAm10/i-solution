import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مشاريع الطلاب | I.Solution",
  description: "نماذج من المشاريع العملية التي ستبنيها خلال التدريب - من صفحات Landing إلى تطبيقات Full-Stack",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

