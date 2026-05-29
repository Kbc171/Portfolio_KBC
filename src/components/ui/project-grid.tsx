type ProjectItem = {
  name: string;
  category: string;
  summary: string;
  details: string[];
  metrics: string[];
};

type ProjectGridProps = {
  items: ProjectItem[];
};

export function ProjectGrid({ items }: ProjectGridProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {items.map((project) => (
        <article
          key={project.name}
          className="group relative overflow-hidden rounded-[26px] border border-cyan-300/10 bg-[rgba(9,19,24,0.82)] p-6"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(115,211,255,0.18),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100" />
          <div className="relative space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8fdfff]">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1.5 text-xs text-cyan-50/90"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-base leading-7 text-white/75">{project.summary}</p>
            <ul className="space-y-2 text-sm leading-7 text-white/72">
              {project.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
