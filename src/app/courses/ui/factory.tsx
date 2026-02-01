"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Layers,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Gift,
  ArrowUpRight,
} from "lucide-react";

import { tracks } from "@/app/data/courses";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useMirror } from "../store";
import { FreeBadge } from "./free-badge";

const trackIcons: Record<string, React.ReactNode> = {
  frontend: <Monitor className="h-6 w-6" />,
  backend: <Server className="h-6 w-6" />,
  fullstack: <Layers className="h-6 w-6" />,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function buildWaLink(phone: string, message?: string) {
  const normalized = phone.replace(/[^\d]/g, ""); // removes + and spaces
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${normalized}${text}`;
}

const UIFactory = () => {
  const activeTrack = useMirror("activeTrack");
  const activeLevel = useMirror("activeLevel");
  const handleTrackFilter = useMirror("handleTrackFilter");
  const handleLevelFilter = useMirror("handleLevelFilter");

  // ---- Workshops (from same data) ----
  const workshops = tracks.filter((t: any) => t.type === "workshop");
  const courseTracks = tracks.filter((t: any) => t.type !== "workshop");

  // ---- Filtering for tracks only ----
  const filteredTracks =
    activeTrack === "all"
      ? courseTracks
      : courseTracks.filter((t: any) => t.id === activeTrack);

  const availableLevels =
    activeTrack === "all"
      ? [1, 2, 3]
      : courseTracks
          .find((t: any) => t.id === activeTrack)
          ?.levels.map((l: any) => l.level) || [1, 2, 3];

  return (
    <div className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          المسارات التدريبية
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          اختر المسار والمستوى الذي يناسب أهدافك ومستواك الحالي
        </p>
      </motion.div>

      {/* =========================
          Workshops Section (TOP)
         ========================= */}
      {workshops.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">
                الورشات المجانية
              </h2>
              <p className="text-sm text-muted-foreground">
                جلسات قصيرة لتفهم الأساسيات قبل الدخول بالكورس
              </p>
            </div>

            {/* <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              <Gift className="h-4 w-4" />
              مجاناً
            </span> */}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {workshops.map((w: any) => {
              const wa = w?.cta?.whatsappNumber || "963949620990";
              const waMsg =
                w?.cta?.message || "مرحبا! بدي احجز مقعدي بالورشة المجانية.";
              const waLabel = w?.cta?.label || "احجز مقعدك";

              return (
                <motion.div
                  className="card-premium relative overflow-hidden border border-accent/25 bg-gradient-to-br from-accent/10 via-background to-primary/10"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -2 }}
                >
                  {/* <motion.div
                    className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-background/30 text-xs font-bold text-accent backdrop-blur"
                    animate={{ opacity: [0.6, 0.9, 0.6] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  /> */}

                  <FreeBadge text={w.badge || "مجانًا"} />

                  {/* Title */}
                  <h3 className="mb-2 pr-2 text-lg font-bold sm:text-xl">
                    {w.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {w.description}
                  </p>

                  {/* Topics (from first level projects or explicit topics) */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">المحاور:</h4>
                    <ul className="space-y-1">
                      {(w.levels?.[0]?.projects || [])
                        .slice(0, 4)
                        .map((item: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={buildWaLink(wa, waMsg)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
                    >
                      {waLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>

                    <p className="text-center text-xs text-muted-foreground">
                      جلسة واحدة • مناسبة للمبتدئين
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="mt-10 h-px w-full bg-border/60" />
        </motion.div>
      )}

      {/* =========================
          Filters (Responsive)
         ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 space-y-4"
      >
        {/* Track Filter */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className="text-sm font-medium text-muted-foreground">
            المسار:
          </span>

          {/* Scrollable chips on mobile */}
          <div className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              onClick={() => handleTrackFilter("all")}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTrack === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              الكل
            </button>

            {courseTracks.map((track: any) => (
              <button
                key={track.id}
                onClick={() => handleTrackFilter(track.id)}
                className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTrack === track.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {trackIcons[track.id]}
                {track.id === "frontend" && "Frontend"}
                {track.id === "backend" && "Backend"}
                {track.id === "fullstack" && "Fullstack"}
              </button>
            ))}
          </div>
        </div>

        {/* Level Filter */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className="text-sm font-medium text-muted-foreground">
            المستوى:
          </span>

          <div className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              onClick={() => handleLevelFilter("all")}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeLevel === "all"
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              الكل
            </button>

            {[1, 2, 3].map((levelNum) => (
              <button
                key={levelNum}
                onClick={() => handleLevelFilter(levelNum.toString())}
                disabled={!availableLevels.includes(levelNum)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeLevel === levelNum.toString()
                    ? "bg-accent text-accent-foreground"
                    : availableLevels.includes(levelNum)
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      : "cursor-not-allowed bg-secondary/50 text-muted-foreground opacity-50"
                }`}
              >
                المستوى {levelNum}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Beginner Callout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-6"
      >
        <div className="flex items-start gap-3">
          <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <h3 className="mb-1 font-semibold">ملاحظة للمبتدئين</h3>
            <p className="text-sm text-muted-foreground">
              هدف المستوى الأول هو تأسيس مهارات تؤهلك للتقديم على تدريب أو فرص
              Junior — النتائج تعتمد على التزامك بالتطبيق.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tracks Content */}
      <div className="space-y-12">
        {filteredTracks.map((track: any, trackIndex: number) => {
          const filteredLevels =
            activeLevel === "all"
              ? track.levels
              : track.levels.filter(
                  (l: any) => l.level.toString() === activeLevel,
                );

          if (filteredLevels.length === 0) return null;

          return (
            <motion.div
              key={track.id}
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: trackIndex * 0.1 }}
            >
              {/* Track Header */}
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    track.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {trackIcons[track.id]}
                </div>
                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">
                    {track.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {track.description}
                  </p>
                </div>
              </div>

              {/* Levels */}
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {filteredLevels.map((level: any) => (
                  <motion.div
                    key={`${track.id}-${level.level}`}
                    variants={fadeInUp}
                    className="card-premium"
                  >
                    {/* Level Badge */}
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${
                          track.color === "accent"
                            ? "bg-accent/10 text-accent"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        المستوى {level.level}
                      </span>

                      {/* Keep duration for courses only */}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{level.duration}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mb-2 text-lg font-bold">{level.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {level.description}
                    </p>

                    {/* Target Audience */}
                    <div className="mb-4 flex items-start gap-2 rounded-lg bg-secondary/50 p-3">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">
                        {level.targetAudience}
                      </p>
                    </div>

                    {/* Projects */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">المشاريع:</h4>
                      <ul className="space-y-1">
                        {level.projects.map((project: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* WhatsApp CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 text-center"
      >
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">
          محتار أي مسار يناسبك؟
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
          تواصل معنا وسنساعدك في اختيار المسار والمستوى المناسب بناءً على خبرتك
          وأهدافك
        </p>
        <WhatsAppButton
          showText
          text="استشرني مجاناً عبر واتساب"
          customMessage="مرحبا! أحتاج مساعدة في اختيار المسار التدريبي المناسب لي"
        />
      </motion.div>
    </div>
  );
};

export { UIFactory };
