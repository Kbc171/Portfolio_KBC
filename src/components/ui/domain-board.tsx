type DomainTrack = {
  name: string;
  points: string[];
};

type DomainBoardProps = {
  items: DomainTrack[];
};

export function DomainBoard({ items }: DomainBoardProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.name}
          className="rounded-[24px] border border-cyan-300/10 bg-[rgba(9,19,24,0.82)] p-6"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/62">{item.name}</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/74">
            {item.points.map((point) => (
              <li key={point} className="rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

