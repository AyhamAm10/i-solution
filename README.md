# I.Solution Course Platform

منصة تدريبية لتعليم البرمجة - Next.js 14 مع App Router

## نظرة عامة

هذا المشروع هو نسخة Next.js 14 من منصة I.Solution التدريبية، مبني بنفس الـstructure والـlogic تماماً مثل المشروع الأصلي React.

## التقنيات المستخدمة

- **Next.js 16** - React framework مع App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn-ui** - UI component library
- **Framer Motion** - Animations
- **Zustand** - State management (via mirror factory pattern)
- **Three.js** - 3D graphics (للـ Hero section)
- **next-themes** - Theme management

## البنية

```
next-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (site)/            # صفحات الموقع (home, courses, projects, about, FAQ)
│   │   │   ├── layout.tsx     # Layout مشترك لصفحات الموقع
│   │   │   ├── page.tsx       # الصفحة الرئيسية
│   │   │   ├── courses/       # صفحة المسارات
│   │   │   ├── projects/      # صفحة المشاريع
│   │   │   ├── about/         # صفحة من أنا
│   │   │   └── faq/           # صفحة الأسئلة الشائعة
│   │   ├── data/              # البيانات الثابتة (courses, projects, FAQs)
│   │   ├── layout.tsx         # Root layout مع RTL support
│   │   ├── providers.tsx      # Global providers (theme, toasters, tooltips)
│   │   ├── globals.css        # Global styles و CSS variables
│   │   └── not-found.tsx      # صفحة 404
│   ├── components/            # Components مشتركة
│   │   ├── Header.tsx         # Header مع navigation
│   │   ├── Footer.tsx         # Footer
│   │   ├── Hero3D.tsx         # Hero section مع 3D illustration
│   │   ├── WhatsAppButton.tsx # WhatsApp button component
│   │   ├── ThemeToggle.tsx    # Theme toggle button
│   │   └── ui/                # shadcn-ui components
│   ├── hooks/                 # Custom hooks
│   │   ├── use-mirror-factory.ts  # Mirror factory pattern للـstate management
│   │   ├── use-toast.ts       # Toast notifications hook
│   │   └── use-mobile.tsx     # Mobile detection hook
│   └── lib/                   # Utilities
│       └── utils.ts           # Utility functions (cn helper)
└── public/                    # Static assets
    ├── logo.jpg
    └── favicon.ico
```

## البدء

### المتطلبات

- Node.js 18+ أو Bun
- npm, yarn, pnpm, أو bun

### التثبيت

```bash
# تثبيت الـdependencies
npm install
# أو
bun install
```

### التطوير

```bash
# تشغيل development server
npm run dev
# أو
bun run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

### البناء

```bash
# إنشاء production build
npm run build
# أو
bun run build
```

### تشغيل Production Server

```bash
# تشغيل production server
npm start
# أو
bun start
```

## الصفحات

- `/` - الصفحة الرئيسية مع Hero, tracks, و featured projects
- `/courses` - المسارات التدريبية مع filters (track & level)
- `/projects` - مشاريع الطلاب مع modal للتفاصيل
- `/about` - معلومات عن المدرب وأسلوب التدريب
- `/faq` - الأسئلة الشائعة مع accordion
- أي route غير موجود → صفحة 404

## الميزات

- ✅ RTL support كامل للعربية
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ Animations مع Framer Motion
- ✅ 3D Hero section
- ✅ WhatsApp integration
- ✅ SEO-friendly مع Next.js metadata
- ✅ Type-safe مع TypeScript

## النشر

يمكن نشر هذا المشروع على:

- **Vercel** (موصى به لـ Next.js)
- **Netlify**
- **أي Node.js hosting platform**

## ملاحظات

- المشروع يستخدم Next.js 16 مع React 19
- جميع الـcomponents محولة من React Router إلى Next.js App Router
- نفس الـlogic والـstructure تماماً مثل المشروع الأصلي React
