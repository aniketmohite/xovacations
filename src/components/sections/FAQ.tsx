"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
              Questions
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4 tracking-tight text-foreground">
              Frequently <span className="text-gold">Asked</span>
            </h2>
          </FadeIn>
        </div>

        {/* Accordion */}
        <FadeIn delay={0.2}>
          <Accordion className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                className="bg-white rounded-xl px-6 border border-black/5 shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="py-5 text-base font-medium hover:no-underline hover:text-gold transition-colors duration-300 text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/50 leading-relaxed pb-5">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
