"use client";

import { motion } from "framer-motion";
import { faqs } from "@/app/data/courses";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          الأسئلة الشائعة
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          إجابات على أكثر الأسئلة التي تصلنا
        </p>
      </motion.div>

      {/* FAQ Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mx-auto max-w-3xl"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-premium overflow-hidden border-none"
            >
              <AccordionTrigger className="px-6 py-4 text-right hover:no-underline [&[data-state=open]]:border-b [&[data-state=open]]:border-border">
                <span className="text-base font-semibold sm:text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* Still have questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 text-center"
      >
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">
          لديك سؤال آخر؟
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
          لا تتردد في التواصل معنا عبر واتساب وسنرد عليك في أقرب وقت
        </p>
        <WhatsAppButton 
          showText 
          text="اسأل عبر واتساب" 
          customMessage="مرحبا! لدي سؤال عن التدريب"
        />
      </motion.div>
    </div>
  );
};

export { UIFactory };

