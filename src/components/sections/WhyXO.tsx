"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn, staggerContainer, staggerItem } from "@/components/motion/FadeIn";
import { VALUE_PROPS } from "@/lib/constants";

export function WhyXO() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-xo" className="py-28 lg:py-36 relative bg-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
              Why Choose Us
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-foreground">
              The <span className="text-gold">XO</span> Difference
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-foreground/50 text-lg max-w-2xl mx-auto leading-relaxed">
              We don&apos;t sell packages. We design experiences — with care,
              precision, and an unwavering commitment to making your journey extraordinary.
            </p>
          </FadeIn>
        </div>

        {/* Value Props Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {VALUE_PROPS.map((prop) => (
            <motion.div key={prop.title} variants={staggerItem}>
              <div className="bg-white rounded-2xl p-8 h-full border border-black/5 hover:border-gold/30 hover:shadow-md transition-all duration-500 group">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold/80 group-hover:bg-gold transition-colors duration-500">
                  <prop.icon className="h-5 w-5 text-foreground/70" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 tracking-tight text-foreground">
                  {prop.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/50 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
