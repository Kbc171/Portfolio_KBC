import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-xs uppercase tracking-[0.34em] text-white/42">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="max-w-3xl text-base leading-8 text-white/68">{body}</p> : null}
    </div>
  );
}

