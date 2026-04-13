"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FadeIn, staggerContainer, staggerItem } from "@/components/motion/FadeIn";
import { EXPERIENCE_CATEGORIES } from "@/lib/constants";

export function ExperienceCategories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiences" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
              Occasions We Celebrate
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-foreground">
              Crafted for Every
              <span className="text-gold"> Occasion</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-foreground/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether it&apos;s the start of forever or a celebration of years
              well-loved, we design journeys that honor your story.
            </p>
          </FadeIn>
        </div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {EXPERIENCE_CATEGORIES.map((cat) => (
            <motion.div key={cat.title} variants={staggerItem}>
              <div className="group relative h-[320px] sm:h-[360px] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500">
                {/* Background Image */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/5 transition-all duration-500 group-hover:from-black/60 group-hover:via-black/15" />

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/30 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <div className="flex items-center gap-2 mb-2">
                    <cat.icon className="h-4 w-4 text-white/90" />
                    <span className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium">
                      {cat.title}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
