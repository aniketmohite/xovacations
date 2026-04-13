"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-sm"
          : "bg-black/25 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8 h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span className={cn(
            "font-heading text-2xl font-bold tracking-wide transition-colors duration-500",
            scrolled ? "text-gold" : "text-white"
          )}>
            XO
          </span>
          <span className={cn(
            "text-sm font-light tracking-[0.2em] uppercase transition-colors duration-500",
            scrolled ? "text-foreground/70" : "text-white/80"
          )}>
            Vacations
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors duration-300",
                scrolled
                  ? "text-foreground/50 hover:text-gold"
                  : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="/inquiry"
            className={cn(
              buttonVariants({ size: "sm" }),
              scrolled
                ? "bg-gold text-foreground hover:bg-gold-light"
                : "bg-white/15 text-white border border-white/25 hover:bg-white/25",
              "font-medium tracking-wide text-xs uppercase px-6 h-10 rounded-full transition-all duration-500"
            )}
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "md:hidden transition-colors",
            scrolled ? "text-foreground/70 hover:text-gold" : "text-white/80 hover:text-white"
          )}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden glass-strong border-t border-black/5"
        >
          <nav className="flex flex-col items-center gap-6 py-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-wide text-foreground/60 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/inquiry"
              onClick={() => setMobileOpen(false)}
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-gold text-foreground hover:bg-gold-light font-medium tracking-wide text-xs uppercase px-6 h-10 rounded-full mt-2"
              )}
            >
              Book Consultation
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
