import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  FOOTER_EXPERIENCES,
  FOOTER_COMPANY,
  CONTACT_INFO,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative">
      {/* Final CTA Banner */}
      <section className="py-28 lg:py-36 relative overflow-hidden bg-primary/20">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
            Your Story Awaits
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-tight leading-tight text-foreground">
            Let&apos;s Design a Journey
            <br />
            <span className="text-gold">Worth Remembering</span>
          </h2>
          <p className="mt-6 text-foreground/50 text-lg max-w-xl mx-auto leading-relaxed">
            Every great love story deserves an extraordinary chapter. Let us write
            yours.
          </p>
          <div className="mt-10">
            <a
              href="/inquiry"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gold text-foreground hover:bg-gold-light font-medium tracking-wide text-sm uppercase px-10 h-14 rounded-full shadow-sm"
              )}
            >
              Start Your Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Grid */}
      <div className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <Image
                  src="/logo.png"
                  alt="XO Vacations"
                  width={300}
                  height={120}
                  className="h-[120px] w-auto"
                />
              </div>
              <p className="text-sm text-foreground/40 leading-relaxed">
                Designing deeply personal luxury travel experiences for life&apos;s
                most meaningful moments.
              </p>
            </div>

            {/* Experiences */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-5">
                Experiences
              </h4>
              <ul className="space-y-3">
                {FOOTER_EXPERIENCES.map((item) => (
                  <li key={item}>
                    <a
                      href="#experiences"
                      className="text-sm text-foreground/40 hover:text-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {FOOTER_COMPANY.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-foreground/40 hover:text-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-5">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-foreground/40">
                  <Phone className="h-4 w-4 text-gold/60 shrink-0" />
                  {CONTACT_INFO.phone}
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground/40">
                  <Mail className="h-4 w-4 text-gold/60 shrink-0" />
                  {CONTACT_INFO.email}
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/40">
                  <MapPin className="h-4 w-4 text-gold/60 shrink-0 mt-0.5" />
                  {CONTACT_INFO.address}
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-10 bg-black/5" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/30">
              &copy; 2026 XO Vacations. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-xs text-foreground/30 hover:text-gold transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-foreground/30 hover:text-gold transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
