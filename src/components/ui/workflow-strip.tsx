type WorkflowStripProps = {
  stages: string[];
};

export function WorkflowStrip({ stages }: WorkflowStripProps) {
  return (
    <section className="rounded-[24px] border border-cyan-300/10 bg-[rgba(8,16,22,0.82)] p-6">
      <div className="grid gap-4 lg:grid-cols-5">
        {stages.map((stage, index) => (
          <div
            key={stage}
            className="rounded-[18px] border border-cyan-300/10 bg-cyan-300/[0.04] p-4"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/56">
              Stage {index + 1}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/76">{stage}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
