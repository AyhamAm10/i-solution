"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Server, Layers, ChevronLeft, Rocket, Target, Users, ArrowLeft, Code, GraduationCap, CheckCircle } from "lucide-react";
import { Hero3D } from "@/components/hero-illustration";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { tracks, projects } from "@/app/data/courses";
import { HomeLoadingOverlay } from "./home-loading-overlay";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const trackIcons: Record<string, React.ReactNode> = {
  frontend: <Monitor className="h-8 w-8" />,
  backend: <Server className="h-8 w-8" />,
  fullstack: <Layers className="h-8 w-8" />
};

const whyPoints = [
  { icon: <Rocket className="h-6 w-6" />, text: "من الصفر إلى مشروع عملي" },
  { icon: <Target className="h-6 w-6" />, text: "تركيز على المهارات المطلوبة لسوق العمل" },
  { icon: <Users className="h-6 w-6" />, text: "متابعة وتمارين ومشاريع" }
];

const levels = [
  { level: 1, title: "المستوى 1: تأسيس + مشروع", description: "بناء الأساسيات مع مشروع عملي" },
  { level: 2, title: "المستوى 2: تطبيقات عملية + مشروعين", description: "تطبيقات واقعية ومشاريع متعددة" },
  { level: 3, title: "المستوى 3: هيكلة احترافية + حركات متقدمة", description: "Framer Motion + Three.js" }
];

const UIFactory = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
    <HomeLoadingOverlay />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-hero-pattern">
        <div className="section-container relative z-10 flex min-h-[80vh] flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
          {/* Content */}
          <motion.div 
            className="flex-1 text-center lg:text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              تعلم البرمجة بشكل عملي…{" "}
              <span className="text-gradient-primary">خطوة بخطوة</span>{" "}
              حتى تبني مشاريع حقيقية
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
              تدريب موجّه للمبتدئين: مشاريع + منهج واضح + أسلوب قريب من طريقة العمل في الشركات
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <WhatsAppButton showText text="تواصل عبر واتساب" className="text-lg" />
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                استعرض المسارات
                <ChevronLeft className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* 3D Hero */}
          <motion.div 
            className="h-[300px] w-full flex-1 sm:h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Hero3D />
          </motion.div>
        </div>

        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-accent/20 blur-[100px]" />
      </section>

      {/* Why Section */}
      <section className="section-container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            لماذا هذا التدريب؟
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-12 text-muted-foreground">
            نركز على ما يهم فعلاً في سوق العمل
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-3">
            {whyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card-premium flex flex-col items-center gap-4 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {point.icon}
                </div>
                <p className="text-lg font-semibold">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tracks Section */}
      <section className="section-container bg-muted/30">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
              المسارات التدريبية
            </h2>
            <p className="text-muted-foreground">
              اختر المسار الذي يناسب أهدافك
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tracks.map((track) => (
              <motion.div
                key={track.id}
                variants={fadeInUp}
                className="track-card group"
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                  track.color === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                }`}>
                  {trackIcons[track.id]}
                </div>
                <h3 className="mb-2 text-xl font-bold">{track.name}</h3>
                <p className="mb-6 text-muted-foreground">{track.description}</p>
                <p className="mb-4 text-sm text-muted-foreground">
                  {track.levels.length} مستويات متاحة
                </p>
                <Link
                  href={`/courses?track=${track.id}`}
                  className="inline-flex items-center gap-2 font-semibold text-primary transition-colors group-hover:text-primary/80"
                >
                  عرض التفاصيل
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Levels Section */}
      <section className="section-container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
              كيف تعمل المستويات؟
            </h2>
            <p className="text-muted-foreground">
              تدرج منطقي من الأساسيات إلى الاحتراف
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute right-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-accent lg:right-1/2 lg:block" />

            <div className="space-y-8">
              {levels.map((level, index) => (
                <motion.div
                  key={level.level}
                  variants={fadeInUp}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Level indicator */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground lg:absolute lg:right-1/2 lg:translate-x-1/2">
                    {level.level}
                  </div>

                  {/* Content */}
                  <div className={`card-premium flex-1 ${index % 2 === 0 ? "lg:ml-auto lg:mr-16" : "lg:ml-16 lg:mr-auto"} lg:w-[calc(50%-4rem)]`}>
                    <div className="flex items-center gap-3 mb-2">
                      {level.level === 1 && <GraduationCap className="h-5 w-5 text-primary" />}
                      {level.level === 2 && <Code className="h-5 w-5 text-primary" />}
                      {level.level === 3 && <Rocket className="h-5 w-5 text-accent" />}
                      <h3 className="text-lg font-bold">{level.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{level.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={fadeInUp} className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-accent">
              <CheckCircle className="h-5 w-5" />
              <p className="font-semibold">يمكن الدخول لمستوى متقدم بعد تقييم مستوى بسيط</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="section-container bg-muted/30">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
              مشاريع الطلاب
            </h2>
            <p className="text-muted-foreground">
              نماذج من المشاريع التي ستبنيها خلال التدريب
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="card-premium"
              >
                <h3 className="mb-2 text-lg font-bold">{project.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              عرض كل المشاريع
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 text-center sm:p-12 lg:p-16"
        >
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
              جاهز تبدأ رحلتك في البرمجة؟
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              سجّل اهتمامك الآن وسنقترح عليك المسار الأنسب.
            </p>
            <WhatsAppButton 
              showText 
              text="تواصل عبر واتساب" 
              className="text-lg"
              customMessage="مرحبا! أنا مهتم بالتسجيل في تدريب البرمجة وأحتاج مساعدة في اختيار المسار المناسب"
            />
          </div>

          {/* Background decoration */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-[80px]" />
        </motion.div>
      </section>
    </>
  );
};

export { UIFactory };

