type TerminalSnapshot = {
  title: string;
  prompt: string;
  lines: string[];
};

type TerminalBoardProps = {
  items: TerminalSnapshot[];
};

export function TerminalBoard({ items }: TerminalBoardProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {items.map((item) => (
        <section
          key={item.title}
          className="overflow-hidden rounded-[22px] border border-cyan-300/12 bg-[#071118]"
        >
          <div className="flex items-center justify-between border-b border-cyan-300/10 px-4 py-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/60">
              {item.title}
            </p>
          </div>
          <div className="space-y-3 px-4 py-4 font-mono text-sm leading-7 text-cyan-50/82">
            {item.lines.map((line) => (
              <p key={line}>
                <span className="mr-2 text-cyan-300">{item.prompt}</span>
                <span>{line}</span>
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

