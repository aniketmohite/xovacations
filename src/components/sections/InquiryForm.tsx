"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";

export function InquiryForm() {
  return (
    <section id="inquiry" className="py-28 lg:py-36 relative bg-primary/20">
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
            Start Planning
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-foreground">
            Begin Your <span className="text-gold">Journey</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-foreground/50 text-lg max-w-xl mx-auto leading-relaxed">
            Answer a few quick questions and our concierge team will craft a
            personalized itinerary just for you. No commitment, just inspiration.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <a
              href="/inquiry"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gold text-foreground hover:bg-gold-light font-medium tracking-wide text-sm uppercase px-10 h-14 rounded-full shadow-sm"
              )}
            >
              Book Your Complimentary Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-xs text-foreground/30">
            Takes less than 2 minutes. We&apos;ll be in touch within 24 hours.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
