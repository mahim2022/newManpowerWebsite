import { ReactNode } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  dark?: boolean;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  innerClassName,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-10", innerClassName)}>
        <RevealOnScroll>
          {(eyebrow || title || subtitle) && (
            <header className="mb-10 max-w-3xl space-y-4 md:mb-12">
              {eyebrow ? (
                <p
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.24em]",
                    dark ? "text-[#C6A969]" : "text-[#0B1F3A]/70",
                  )}
                >
                  {eyebrow}
                </p>
              ) : null}
              {title ? (
                <h2
                  className={cn(
                    "font-serif text-2xl leading-tight sm:text-3xl md:text-4xl",
                    dark ? "text-[#FAFAFA]" : "text-[#0B1F3A]",
                  )}
                >
                  {title}
                </h2>
              ) : null}
              {subtitle ? (
                <p className={cn("max-w-2xl text-sm leading-7 sm:text-base sm:leading-8", dark ? "text-white/80" : "text-neutral-700")}>
                  {subtitle}
                </p>
              ) : null}
            </header>
          )}
        </RevealOnScroll>
        <RevealOnScroll>{children}</RevealOnScroll>
      </div>
    </section>
  );
}
