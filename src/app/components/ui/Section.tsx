import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
  fullWidth?: boolean;
}

export function Section({ children, className, containerClassName, fullWidth = false, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 md:py-32", className)} {...props}>
      <div className={cn("mx-auto px-4 md:px-6", fullWidth ? "w-full" : "max-w-7xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
