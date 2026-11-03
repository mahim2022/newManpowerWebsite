import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  titleAs?: "h1" | "h2";
  subtitle?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  dark?: boolean;
  spacing?: "default" | "compact" | "lead";
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  titleAs = "h2",
  subtitle,
  children,
  className,
  innerClassName,
  dark = false,
  spacing = "default",
}: SectionWrapperProps) {
  const sectionSpacing = spacing === "lead" ? "pb-16 pt-12 md:pb-20 md:pt-16" : spacing === "compact" ? "py-14 md:py-20" : "py-20 lg:py-24";
  const headerSpacing = "mb-10 max-w-3xl space-y-4 md:mb-12";
  const Heading = titleAs;

  return (
    <section id={id} className={cn(sectionSpacing, className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-10", innerClassName)}>
        {(eyebrow || title || subtitle) && (
          <header className={headerSpacing}>
            {eyebrow ? (
              <p
                className={cn(
                  "eyebrow",
                  dark ? "text-[#D8BC77]" : "text-[#8A6420]",
                )}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <Heading
                className={cn(
                  "max-w-[27ch] font-serif text-3xl leading-[1.18] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]",
                  dark ? "text-[#FAFAFA]" : "text-[#0B1F3A]",
                )}
              >
                {title}
              </Heading>
            ) : null}
            {subtitle ? (
              <p className={cn("max-w-[65ch] text-[15px] leading-8", dark ? "text-white/75" : "text-neutral-600")}>
                {subtitle}
              </p>
            ) : null}
          </header>
        )}

        {children}
      </div>
    </section>
  );
}
