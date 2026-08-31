"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
};

export function RevealOnScroll({ children, className }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-300 motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
