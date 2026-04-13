"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 lg:py-36 relative bg-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
              Simple Process
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-foreground">
              Your Journey
              <span className="text-gold"> Begins Here</span>
            </h2>
          </FadeIn>
        </div>

        {/* Steps */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-[-24px] h-px bg-gradient-to-r from-gold/40 to-gold/10" />
              )}

              <div className="text-center group">
                {/* Number circle */}
                <div className="relative mx-auto mb-6">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full border border-gold/30 group-hover:border-gold/60 transition-colors duration-500 bg-white">
                    <span className="font-heading text-2xl font-bold text-gold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gold/80 mb-4">
                  <step.icon className="h-4 w-4 text-foreground/60" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 tracking-tight text-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/50 leading-relaxed max-w-[240px] mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
