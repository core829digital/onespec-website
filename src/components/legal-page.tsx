import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <div className="container-onespec">
        <Reveal className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-[13px] text-[var(--color-text-secondary)]">
            Ultimo aggiornamento: {updated}
          </p>
          <div className="prose-legal mt-10 space-y-6 text-[15px] leading-relaxed text-[var(--color-text)] [&_h2]:mt-8 [&_h2]:text-[18px] [&_h2]:font-semibold [&_h2]:text-[var(--color-text)] [&_p]:text-[var(--color-text-secondary)] [&_li]:text-[var(--color-text-secondary)] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
