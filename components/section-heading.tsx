import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  number,
  title,
  accent,
  copy,
  action,
}: {
  eyebrow: string;
  number: string;
  title: string;
  accent?: string;
  copy?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 grid gap-6 border-b hairline pb-7 md:mb-14 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <div className="mb-4 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[var(--muted)]">
          <span className="font-display text-[var(--accent)]">{number}</span>
          <span className="h-px w-9 bg-[var(--line)]" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="font-display max-w-4xl text-4xl font-semibold tracking-[-0.025em] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.02]">
          {title} {accent ? <span className="text-gradient">{accent}</span> : null}
        </h2>
        {copy ? <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-[15px]">{copy}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
