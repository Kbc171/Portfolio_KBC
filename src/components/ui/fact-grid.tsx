type Fact = {
  label: string;
  value: string;
};

type FactGridProps = {
  facts: Fact[];
};

export function FactGrid({ facts }: FactGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="rounded-[22px] border border-cyan-300/12 bg-cyan-300/[0.04] p-5"
        >
          <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/62">{fact.label}</p>
          <p className="mt-3 text-lg font-medium text-white">{fact.value}</p>
        </div>
      ))}
    </div>
  );
}
