type Toolchain = {
  name: string;
  tools: string[];
  focus: string;
};

type ToolchainGridProps = {
  items: Toolchain[];
};

export function ToolchainGrid({ items }: ToolchainGridProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.name}
          className="rounded-[24px] border border-cyan-300/10 bg-[rgba(10,18,24,0.86)] p-6"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/62">{item.name}</p>
          <p className="mt-4 text-base leading-7 text-white/68">{item.focus}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-cyan-300/12 bg-cyan-300/[0.05] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-cyan-50/76"
              >
                {tool}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

