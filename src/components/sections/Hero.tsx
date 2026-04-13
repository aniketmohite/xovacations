"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const HERO_IMAGES = [
  {
    url: "https://globetrender.com/wp-content/uploads/2022/05/2022.01.21_fra%CC%81-badi_01-scaled-scaled.jpg",
    alt: "Luxury poolside retreat",
  },
  {
    url: "https://globetrender.com/wp-content/uploads/2024/12/agustin-diaz-gargiulo-7F65HDP0-E0-unsplash-scaled.jpg",
    alt: "Scenic coastal escape",
  },
  {
    url: "https://globetrender.com/wp-content/uploads/2020/09/AdobeStock_65216968-scaled-e1601550061556-scaled.jpeg",
    alt: "Tropical paradise aerial",
  },
  {
    url: "https://globetrender.com/wp-content/uploads/2026/04/Hiddn-in-clouds.jpg",
    alt: "Hidden in the clouds",
  },
];

const CAROUSEL_INTERVAL = 5000;

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % HERO_IMAGES.length),
    []
  );
  const prev = useCallback(
    () =>
      setCurrent((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, CAROUSEL_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-dvh min-h-[600px] overflow-hidden">
      {/* ── Background Carousel ── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_IMAGES[current].url}')` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white max-w-3xl"
          >
            Designing Journeys That
            Feel Personal & Unforgettable.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
          >
            Tailored luxury travel experiences crafted exclusively for
            discerning adventurers seeking unparalleled journeys worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row items-start gap-3"
          >
            <a
              href="/inquiry"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-foreground hover:bg-white/90 font-medium tracking-wide text-sm px-7 h-12 rounded-full shadow-lg"
              )}
            >
              Plan Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#experiences"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent font-medium tracking-wide text-sm px-7 h-12 rounded-full"
              )}
            >
              Explore Destinations
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Carousel Controls ── */}
      <div className="absolute bottom-8 right-6 lg:right-10 z-20 flex items-center gap-3">
        {/* Prev / Next */}
        <button
          onClick={prev}
          className="h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* ── Progress Dots ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === current
                ? "w-8 bg-white"
                : "w-1.5 bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </section>
  );
}
