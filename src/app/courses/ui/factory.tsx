"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Layers, CheckCircle, Clock, Users, BookOpen } from "lucide-react";
import { tracks } from "@/app/data/courses";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useMirror } from "../store";

const trackIcons: Record<string, React.ReactNode> = {
  frontend: <Monitor className="h-6 w-6" />,
  backend: <Server className="h-6 w-6" />,
  fullstack: <Layers className="h-6 w-6" />
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const UIFactory = () => {
  const activeTrack = useMirror("activeTrack");
  const activeLevel = useMirror("activeLevel");
  const handleTrackFilter = useMirror("handleTrackFilter");
  const handleLevelFilter = useMirror("handleLevelFilter");

  const filteredTracks = activeTrack === "all" 
    ? tracks 
    : tracks.filter(t => t.id === activeTrack);

  const availableLevels = activeTrack === "all" 
    ? [1, 2, 3]
    : tracks.find(t => t.id === activeTrack)?.levels.map(l => l.level) || [1, 2, 3];

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

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 space-y-4"
      >
        {/* Track Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">المسار:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleTrackFilter("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTrack === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              الكل
            </button>
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => handleTrackFilter(track.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">المستوى:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleLevelFilter("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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
              هدف المستوى الأول هو تأسيس مهارات تؤهلك للتقديم على تدريب أو فرص Junior — النتائج تعتمد على التزامك بالتطبيق.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tracks Content */}
      <div className="space-y-12">
        {filteredTracks.map((track, trackIndex) => {
          const filteredLevels = activeLevel === "all" 
            ? track.levels 
            : track.levels.filter(l => l.level.toString() === activeLevel);

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
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  track.color === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                }`}>
                  {trackIcons[track.id]}
                </div>
                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">{track.name}</h2>
                  <p className="text-sm text-muted-foreground">{track.description}</p>
                </div>
              </div>

              {/* Levels */}
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {filteredLevels.map((level) => (
                  <motion.div
                    key={`${track.id}-${level.level}`}
                    variants={fadeInUp}
                    className="card-premium"
                  >
                    {/* Level Badge */}
                    <div className="mb-4 flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${
                        track.color === "accent" 
                          ? "bg-accent/10 text-accent" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        المستوى {level.level}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{level.duration}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mb-2 text-lg font-bold">{level.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{level.description}</p>

                    {/* Target Audience */}
                    <div className="mb-4 flex items-start gap-2 rounded-lg bg-secondary/50 p-3">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">{level.targetAudience}</p>
                    </div>

                    {/* Projects */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">المشاريع:</h4>
                      <ul className="space-y-1">
                        {level.projects.map((project, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
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
          تواصل معنا وسنساعدك في اختيار المسار والمستوى المناسب بناءً على خبرتك وأهدافك
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

