"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, staggerContainer, staggerItem } from "@/components/motion/FadeIn";
import { SIGNATURE_EXPERIENCES } from "@/lib/constants";

export function SignatureExperiences() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
              Curated Journeys
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-foreground">
              Signature <span className="text-gold">Experiences</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-foreground/50 text-lg max-w-2xl mx-auto leading-relaxed">
              A glimpse into the bespoke journeys we design. Each one is unique —
              these are starting points for your imagination.
            </p>
          </FadeIn>
        </div>

        {/* Experience Cards */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {SIGNATURE_EXPERIENCES.map((exp) => (
            <motion.div key={exp.destination} variants={staggerItem}>
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-black/5 hover:border-gold/30 hover:shadow-lg transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={`${exp.destination} ${exp.occasion}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                  {/* Destination badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-1.5 glass rounded-full px-4 py-2">
                    <MapPin className="h-3.5 w-3.5 text-gold" />
                    <span className="text-xs font-medium tracking-wide text-foreground">
                      {exp.destination}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">
                    {exp.occasion}
                  </span>
                  <p className="mt-3 text-foreground/55 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5 text-foreground/40">
                        <Clock className="h-3.5 w-3.5" />
                        <span className="text-xs">{exp.duration}</span>
                      </div>
                      <div>
                        <span className="text-xs text-foreground/40">From </span>
                        <span className="text-lg font-heading font-bold text-gold">
                          {exp.startingPrice}
                        </span>
                        <span className="text-xs text-foreground/40"> /person</span>
                      </div>
                    </div>

                    <a
                      href="/inquiry"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "text-gold hover:text-gold-light hover:bg-gold/10 text-xs tracking-wide uppercase"
                      )}
                    >
                      Inquire
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
