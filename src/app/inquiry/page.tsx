"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Plane,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ─── Form Steps Config ───────────────────────────────────

interface StepConfig {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  half?: "left" | "right"; // for paired fields on one step
  options?: string[];
}

interface StepGroup {
  question: string;
  subtitle?: string;
  fields: StepConfig[];
}

const STEPS: StepGroup[] = [
  {
    question: "Let's start with your name",
    subtitle: "So we know how to address you.",
    fields: [
      {
        id: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "First Name",
        required: true,
        half: "left",
      },
      {
        id: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Last Name",
        half: "right",
      },
    ],
  },
  {
    question: "What's your date of birth?",
    subtitle: "We love celebrating birthdays on trips.",
    fields: [
      {
        id: "dob",
        label: "Date of Birth",
        type: "date",
        required: true,
      },
    ],
  },
  {
    question: "What's your email address?",
    subtitle: "We'll send your curated itinerary here.",
    fields: [
      {
        id: "email",
        label: "Email ID",
        type: "email",
        placeholder: "you@example.com",
        required: true,
      },
    ],
  },
  {
    question: "What's the best number to reach you?",
    subtitle: "For a quick consultation call.",
    fields: [
      {
        id: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "+91 98765 43210",
        required: true,
      },
    ],
  },
  {
    question: "Where are you based?",
    subtitle: "Helps us plan logistics around your location.",
    fields: [
      {
        id: "city",
        label: "City of Residence",
        type: "text",
        placeholder: "e.g. Mumbai, Delhi, London",
        required: true,
      },
    ],
  },
  {
    question: "What's the purpose of your trip?",
    subtitle: "Every occasion deserves its own kind of magic.",
    fields: [
      {
        id: "purpose",
        label: "Purpose of Visit",
        type: "select",
        required: true,
        options: [
          "Honeymoon",
          "Proposal",
          "Anniversary",
          "Babymoon",
          "Romantic Getaway",
          "Family Vacation",
          "Birthday Celebration",
          "Bucket-List Trip",
          "Corporate Retreat",
          "Other",
        ],
      },
    ],
  },
  {
    question: "Which destination would you like to visit?",
    subtitle: "Dream big — we'll make it happen.",
    fields: [
      {
        id: "destination",
        label: "Destination",
        type: "text",
        placeholder: "e.g. Maldives, Santorini, Bali",
        required: true,
      },
    ],
  },
  {
    question: "How many days would you like to get away?",
    subtitle: "From quick escapes to extended journeys.",
    fields: [
      {
        id: "days",
        label: "Number of Days",
        type: "select",
        required: true,
        options: [
          "3–5 days",
          "5–7 days",
          "7–10 days",
          "10–14 days",
          "14+ days",
        ],
      },
    ],
  },
  {
    question: "When would you like to depart?",
    subtitle: "An approximate date works too.",
    fields: [
      {
        id: "departure",
        label: "Date of Departure",
        type: "date",
        required: true,
      },
    ],
  },
  {
    question: "Are you flexible with your dates?",
    subtitle: "Flexibility can unlock better deals and availability.",
    fields: [
      {
        id: "flexible",
        label: "Date Flexibility",
        type: "select",
        options: [
          "Yes, very flexible",
          "Somewhat flexible (±3 days)",
          "Not flexible",
        ],
      },
    ],
  },
  {
    question: "What's your approximate budget per person?",
    subtitle: "This helps us curate the right experiences.",
    fields: [
      {
        id: "budget",
        label: "Approximate Budget Per Person",
        type: "select",
        required: true,
        options: [
          "Under ₹1,00,000",
          "₹1,00,000 – ₹2,50,000",
          "₹2,50,000 – ₹5,00,000",
          "₹5,00,000 – ₹10,00,000",
          "₹10,00,000+",
        ],
      },
    ],
  },
  {
    question: "Anything else you'd like us to know?",
    subtitle: "Special requests, allergies, surprises — tell us everything.",
    fields: [
      {
        id: "notes",
        label: "Additional Notes",
        type: "textarea",
        placeholder: "Tell us about your dream trip...",
      },
    ],
  },
  {
    question: "Where did you hear about us?",
    subtitle: "We'd love to know how you found XO Vacations.",
    fields: [
      {
        id: "source",
        label: "How did you find us?",
        type: "select",
        required: true,
        options: [
          "Instagram",
          "Facebook",
          "Google Search",
          "Friend / Family Referral",
          "Wedding Planner",
          "Blog / Article",
          "Other",
        ],
      },
    ],
  },
];

// ─── Animations ──────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
  }),
};

// ─── Component ───────────────────────────────────────────

export default function InquiryPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const currentStep = STEPS[step];
  const totalSteps = STEPS.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const updateField = (id: string, value: string) =>
    setFormData((prev) => ({ ...prev, [id]: value }));

  const canProceed = useCallback(() => {
    return currentStep.fields.every((f) => {
      if (!f.required) return true;
      return (formData[f.id] ?? "").trim().length > 0;
    });
  }, [currentStep, formData]);

  const goNext = () => {
    if (step < totalSteps - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    } else {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  const goPrev = () => {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canProceed()) {
      e.preventDefault();
      goNext();
    }
  };

  // ── Success Screen ──
  if (submitted) {
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center bg-primary/10 px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="mx-auto mb-8 h-20 w-20 rounded-full bg-gold flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            You&apos;re All Set!
          </h1>
          <p className="text-foreground/50 text-lg leading-relaxed mb-8">
            Thank you for sharing your travel dreams with us. A member of our
            concierge team will reach out within 24 hours.
          </p>
          <a
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gold text-foreground hover:bg-gold-light font-medium tracking-wide text-sm px-8 h-12 rounded-full"
            )}
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  // ── Form ──
  return (
    <div
      className="min-h-dvh flex flex-col bg-primary/10"
      onKeyDown={handleKeyDown}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-10 h-16 shrink-0">
        <a href="/" className="flex items-center gap-1">
          <Plane className="h-5 w-5 text-gold" />
          <span className="font-heading text-xl font-bold text-gold">XO</span>
          <span className="text-xs font-light tracking-[0.2em] text-foreground/50 uppercase">
            Vacations
          </span>
        </a>
        <span className="text-xs text-foreground/40 tracking-wide">
          {step + 1} of {totalSteps}
        </span>
      </header>

      {/* Progress Bar */}
      <div className="h-1 bg-black/5 shrink-0">
        <motion.div
          className="h-full bg-gold"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Question */}
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-2">
                {currentStep.question}
              </h2>
              {currentStep.subtitle && (
                <p className="text-foreground/45 text-sm sm:text-base mb-10">
                  {currentStep.subtitle}
                </p>
              )}

              {/* Fields */}
              <div
                className={cn(
                  "space-y-5",
                  currentStep.fields.some((f) => f.half) &&
                    "grid grid-cols-2 gap-4 space-y-0"
                )}
              >
                {currentStep.fields.map((field) => (
                  <div
                    key={field.id}
                    className={cn(
                      field.half === "left" && "col-span-1",
                      field.half === "right" && "col-span-1",
                      !field.half && currentStep.fields.some((f) => f.half) && "col-span-2"
                    )}
                  >
                    <label className="block text-xs tracking-wider uppercase text-foreground/40 mb-2 font-medium">
                      {field.label}
                      {field.required && (
                        <span className="text-gold ml-0.5">*</span>
                      )}
                    </label>

                    {field.type === "select" ? (
                      <div className="relative">
                        <select
                          value={formData[field.id] ?? ""}
                          onChange={(e) =>
                            updateField(field.id, e.target.value)
                          }
                          required={field.required}
                          className="h-14 w-full rounded-xl border border-black/10 bg-white px-4 text-base text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all duration-300"
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/30 pointer-events-none" />
                      </div>
                    ) : field.type === "textarea" ? (
                      <textarea
                        rows={5}
                        placeholder={field.placeholder}
                        value={formData[field.id] ?? ""}
                        onChange={(e) =>
                          updateField(field.id, e.target.value)
                        }
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 text-base text-foreground placeholder:text-foreground/25 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all duration-300 resize-none"
                      />
                    ) : field.type === "date" ? (
                      <Input
                        type="date"
                        required={field.required}
                        value={formData[field.id] ?? ""}
                        onChange={(e) =>
                          updateField(field.id, e.target.value)
                        }
                        className="h-14 rounded-xl bg-white border-black/10 text-base px-4 focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all duration-300"
                      />
                    ) : (
                      <Input
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.id] ?? ""}
                        onChange={(e) =>
                          updateField(field.id, e.target.value)
                        }
                        className="h-14 rounded-xl bg-white border-black/10 text-base px-4 placeholder:text-foreground/25 focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all duration-300"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="shrink-0 px-6 lg:px-10 py-6 flex items-center justify-between border-t border-black/5 bg-white/50 backdrop-blur-sm">
        <Button
          variant="ghost"
          onClick={goPrev}
          disabled={step === 0}
          className="text-foreground/50 hover:text-foreground disabled:opacity-0 h-12 px-5 rounded-full"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        <Button
          onClick={goNext}
          disabled={!canProceed()}
          className="bg-gold text-foreground hover:bg-gold-light disabled:opacity-40 h-12 px-8 rounded-full font-medium tracking-wide text-sm"
        >
          {step === totalSteps - 1 ? "Submit" : "Next"}
          {step < totalSteps - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
