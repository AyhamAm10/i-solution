import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة | I.Solution",
  description: "إجابات على أكثر الأسئلة شيوعاً حول التدريب على البرمجة - هل مناسب للمبتدئين؟ كم المدة؟ كيف التسجيل؟",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

