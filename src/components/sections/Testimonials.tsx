"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { FadeIn, staggerContainer, staggerItem } from "@/components/motion/FadeIn";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
              Love Letters
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-foreground">
              Words From Our
              <span className="text-gold"> Travelers</span>
            </h2>
          </FadeIn>
        </div>

        {/* Testimonial Cards */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={staggerItem}>
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col border border-black/5 hover:border-gold/30 hover:shadow-md transition-all duration-500">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-gold/40 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-foreground/60 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8 pt-6 border-t border-black/5">
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/40 mt-0.5">{t.location}</p>
                  <p className="text-xs text-gold mt-1">{t.occasion}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
