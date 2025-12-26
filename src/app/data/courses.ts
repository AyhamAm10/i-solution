// Static course data for I.Solution training platform

export interface CourseLevel {
  level: number;
  title: string;
  description: string;
  projects: string[];
  targetAudience: string;
  duration: string;
}

export interface Track {
  id: string;
  name: string;
  description: string;
  icon: string;
  levels: CourseLevel[];
  color: string;
}

export const tracks: Track[] = [
  {
    id: "frontend",
    name: "مسار الواجهة الأمامية",
    description: "React/Next.js - من التأسيس إلى الاحتراف",
    icon: "Monitor",
    color: "primary",
    levels: [
      {
        level: 1,
        title: "تأسيس الويب وReact",
        description: "أساسيات HTML, CSS, JavaScript وبداية React. ستتعلم كيفية بناء واجهات تفاعلية من الصفر.",
        projects: ["صفحة Landing احترافية + مكوّنات + Responsive"],
        targetAudience: "للمبتدئين الذين لم يسبق لهم البرمجة أو لديهم معرفة بسيطة",
        duration: "تُحدد حسب مستوى المجموعة"
      },
      {
        level: 2,
        title: "Next.js عملي + تطبيقات سوق",
        description: "Next.js App Router, Server Components, API Routes, وربط البيانات مع قواعد بيانات.",
        projects: ["Dashboard CRUD متكامل", "Mini E-commerce بسلة مشتريات"],
        targetAudience: "لمن أتم المستوى الأول أو لديه خبرة React أساسية",
        duration: "تُحدد حسب مستوى المجموعة"
      },
      {
        level: 3,
        title: "هيكلة احترافية + Animations",
        description: "Patterns متقدمة، هيكلة ملفات المشروع، Framer Motion للحركات، Three.js للـ 3D.",
        projects: ["واجهة تفاعلية مع Framer Motion + Three.js"],
        targetAudience: "لمن يريد التميز والعمل على مشاريع معقدة",
        duration: "تُحدد حسب مستوى المجموعة"
      }
    ]
  },
  {
    id: "backend",
    name: "مسار الخادم",
    description: "Node/Express + Postgres - بناء APIs احترافية",
    icon: "Server",
    color: "accent",
    levels: [
      {
        level: 1,
        title: "REST API قوية للمبتدئين",
        description: "أساسيات Node.js, Express, TypeScript, وقواعد البيانات مع Postgres و TypeORM.",
        projects: ["API مع Auth + Postgres + TypeORM"],
        targetAudience: "للمبتدئين الذين يريدون فهم الـ Backend",
        duration: "تُحدد حسب مستوى المجموعة"
      },
      {
        level: 2,
        title: "هيكلة شركات (Layers) + جودة إنتاج",
        description: "Clean Architecture، Controllers/Services/Repositories، Logging، Security، Testing.",
        projects: ["API منظمة (Controller/Service/Repo) + Logging + Security"],
        targetAudience: "لمن أتم المستوى الأول ويريد هيكلة احترافية",
        duration: "تُحدد حسب مستوى المجموعة"
      }
    ]
  },
  {
    id: "fullstack",
    name: "المسار المتكامل",
    description: "Full-Stack - Frontend + Backend معاً",
    icon: "Layers",
    color: "primary",
    levels: [
      {
        level: 1,
        title: "تطبيق صغير متكامل",
        description: "بناء تطبيق متكامل يجمع React مع Node.js API بسيطة.",
        projects: ["تطبيق Todo متكامل مع Auth"],
        targetAudience: "لمن لديه أساسيات Frontend أو Backend",
        duration: "تُحدد حسب مستوى المجموعة"
      },
      {
        level: 2,
        title: "تطبيق متكامل بميزات سوق",
        description: "ميزات متقدمة: Dashboard، Real-time، File Upload، Payments.",
        projects: ["تطبيق إدارة مهام للفرق مع Real-time"],
        targetAudience: "لمن أتم المستوى الأول من المسار المتكامل",
        duration: "تُحدد حسب مستوى المجموعة"
      },
      {
        level: 3,
        title: "Capstone: مشروع كبير منظم",
        description: "مشروع احترافي كامل بهيكلة شركات، Design Patterns، CI/CD.",
        projects: ["منصة متكاملة (مثل منصة تعليمية أو سوق إلكتروني)"],
        targetAudience: "للجادين في بناء مشروع Portfolio قوي",
        duration: "تُحدد حسب مستوى المجموعة"
      }
    ]
  }
];

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  track: string;
  level: number;
  githubUrl?: string;
  liveUrl?: string;
  details: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "صفحة Landing احترافية",
    description: "صفحة هبوط متجاوبة بتصميم عصري مع حركات سلسة",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    track: "frontend",
    level: 1,
    details: "مشروع المستوى الأول في مسار Frontend. يتضمن تصميم متجاوب، مكونات قابلة لإعادة الاستخدام، وحركات بسيطة."
  },
  {
    id: "2",
    name: "Dashboard CRUD",
    description: "لوحة تحكم كاملة مع عمليات إنشاء وقراءة وتحديث وحذف",
    techStack: ["Next.js", "TypeScript", "Prisma", "Postgres"],
    track: "frontend",
    level: 2,
    details: "تطبيق Next.js متكامل مع Server Actions، Forms، و Validation. يتضمن جداول بيانات، فلترة، وبحث."
  },
  {
    id: "3",
    name: "Mini E-commerce",
    description: "متجر إلكتروني مصغر مع سلة مشتريات وعرض منتجات",
    techStack: ["Next.js", "Zustand", "Stripe", "Tailwind"],
    track: "frontend",
    level: 2,
    details: "متجر متكامل مع صفحات المنتجات، سلة المشتريات، وعملية الدفع. State Management مع Zustand."
  },
  {
    id: "4",
    name: "REST API مع Auth",
    description: "API متكاملة مع نظام تسجيل دخول وصلاحيات",
    techStack: ["Node.js", "Express", "TypeORM", "Postgres", "JWT"],
    track: "backend",
    level: 1,
    details: "API RESTful مع CRUD operations، JWT Authentication، Password Hashing، و Role-based Access."
  },
  {
    id: "5",
    name: "API بهيكلة Layers",
    description: "API منظمة بنمط Controller/Service/Repository",
    techStack: ["Node.js", "Express", "TypeScript", "Winston", "Helmet"],
    track: "backend",
    level: 2,
    details: "هيكلة احترافية مع فصل المسؤوليات، Logging مع Winston، Security Headers، و Error Handling متقدم."
  },
  {
    id: "6",
    name: "واجهة تفاعلية 3D",
    description: "واجهة مستخدم مع عناصر ثلاثية الأبعاد وحركات متقدمة",
    techStack: ["React", "Three.js", "Framer Motion", "GSAP"],
    track: "frontend",
    level: 3,
    details: "مشروع متقدم يجمع بين Three.js للعناصر ثلاثية الأبعاد و Framer Motion للحركات السلسة."
  }
];

export const faqs = [
  {
    question: "هل التدريب مناسب للمبتدئين؟",
    answer: "نعم! المستوى الأول مصمم خصيصاً للمبتدئين الذين ليس لديهم أي خبرة سابقة في البرمجة. نبدأ من الصفر ونتقدم خطوة بخطوة."
  },
  {
    question: "هل يمكنني الدخول مباشرة إلى مستوى 2 أو 3؟",
    answer: "نعم، يمكنك ذلك بعد اجتياز تقييم مستوى بسيط للتأكد من جاهزيتك. تواصل معنا عبر واتساب لترتيب التقييم."
  },
  {
    question: "هل أحتاج لابتوب؟",
    answer: "نعم، تحتاج لجهاز كمبيوتر أو لابتوب للتطبيق العملي. لا يمكن الاعتماد على الهاتف فقط للبرمجة."
  },
  {
    question: "كيف يتم التسجيل عبر الموبايل؟",
    answer: "ببساطة اضغط على زر واتساب وأرسل رسالة توضح المسار والمستوى الذي تهتم به. سنرد عليك بالتفاصيل."
  },
  {
    question: "كم مدة كل مستوى؟",
    answer: "تُحدد حسب مستوى المجموعة وتقدم الطلاب. نركز على الفهم والتطبيق أكثر من الالتزام بوقت محدد."
  },
  {
    question: "هل يوجد واجبات ومشاريع؟",
    answer: "نعم! التدريب عملي بالكامل. كل مستوى يتضمن تمارين وواجبات ومشروع نهائي تبنيه بنفسك."
  },
  {
    question: "كيف يتم التواصل؟",
    answer: "التواصل يتم حصرياً عبر واتساب للاستفسارات والمتابعة وتسليم الواجبات."
  }
];

