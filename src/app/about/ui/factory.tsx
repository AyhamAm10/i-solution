"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Database, Users, MessageCircle, CheckCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const skills = [
  { icon: <Code2 className="h-5 w-5" />, name: "React / Next.js" },
  { icon: <Layers className="h-5 w-5" />, name: "Node.js / Express" },
  { icon: <Database className="h-5 w-5" />, name: "PostgreSQL / MongoDB" },
  { icon: <Code2 className="h-5 w-5" />, name: "TypeORM / Prisma" },
];

const trainingStyle = [
  "تعليم عملي 100% - كل درس مرتبط بتطبيق فعلي",
  "مشاريع حقيقية تضيفها لـ Portfolio",
  "متابعة مستمرة ومراجعة للكود",
  "أسلوب قريب من طريقة العمل في الشركات",
  "التركيز على الفهم وليس الحفظ",
];

const UIFactory = () => {
  return (
    <div className="section-container">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          من أنا
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          تعرف على خبرتي وأسلوبي في التدريب
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="card-premium h-full">
            <h2 className="mb-6 text-xl font-bold sm:text-2xl">نبذة عني</h2>
            
            <p className="mb-6 text-muted-foreground leading-relaxed">
              مطور Full-Stack متخصص في بناء تطبيقات الويب الحديثة. أعمل بشكل أساسي مع 
              React و Next.js للواجهات الأمامية، و Node.js مع Express للخوادم، 
              بالإضافة لقواعد البيانات PostgreSQL و MongoDB مع TypeORM.
            </p>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="mb-4 font-semibold">المهارات التقنية:</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg bg-secondary/50 p-3"
                  >
                    <span className="text-primary">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">خبرة العمل</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                عملت ضمن فريق تطوير وساهمت في مشروع مرتبط بالذكاء الاصطناعي. 
                هذه الخبرة أعطتني فهماً عميقاً لطريقة العمل في الشركات وأهمية 
                الهيكلة الجيدة للكود والتعاون مع الفريق.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Training Style */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="card-premium h-full">
            <h2 className="mb-6 text-xl font-bold sm:text-2xl">أسلوبي في التدريب</h2>
            
            <p className="mb-6 text-muted-foreground leading-relaxed">
              أؤمن بأن أفضل طريقة للتعلم هي من خلال التطبيق العملي. لهذا السبب، 
              كل ما أقدمه يركز على بناء مشاريع حقيقية يمكنك إضافتها لـ Portfolio الخاص بك.
            </p>

            {/* Training Points */}
            <div className="space-y-3">
              {trainingStyle.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg bg-secondary/50 p-3"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* Communication */}
            <div className="mt-6 rounded-lg bg-accent/5 border border-accent/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">التواصل</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                التواصل يتم حصرياً عبر واتساب للاستفسارات والمتابعة وتسليم الواجبات.
                أحرص على الرد السريع والمتابعة المستمرة مع كل متدرب.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 text-center"
      >
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">
          جاهز تبدأ؟
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
          تواصل معي الآن وسأساعدك في اختيار المسار الأنسب لك
        </p>
        <WhatsAppButton 
          showText 
          text="تواصل عبر واتساب" 
          customMessage="مرحبا! أريد معرفة المزيد عن التدريب"
        />
      </motion.div>
    </div>
  );
};

export { UIFactory };

