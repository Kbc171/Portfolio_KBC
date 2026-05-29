type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  tools: string[];
};

type TimelineListProps = {
  items: TimelineItem[];
};

export function TimelineList({ items }: TimelineListProps) {
  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <article
          key={`${item.title}-${item.period}`}
          className="relative overflow-hidden rounded-[24px] border border-cyan-300/10 bg-[rgba(13,22,28,0.8)] p-6"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#73d3ff] via-[#efbb54] to-transparent" />
          <div className="space-y-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/52">
                  Milestone {index + 1}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="text-base text-white/72">
                  {item.organization} • {item.location}
                </p>
              </div>
              <p className="text-sm text-[#73d3ff]">{item.period}</p>
            </div>
            <p className="max-w-3xl text-base leading-7 text-white/75">{item.summary}</p>
            <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <ul className="space-y-2 text-sm leading-7 text-white/75">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>• {achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-cyan-200/15 bg-cyan-300/[0.05] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-cyan-50/72"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
