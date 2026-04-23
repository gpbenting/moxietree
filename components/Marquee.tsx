import { techStack } from "@/data";

export default function Marquee() {
  // Duplicate for seamless infinite scroll
  const items = [...techStack, ...techStack];

  return (
    <div className="border-y border-white/10 bg-bg-1 overflow-hidden py-4 mt-12 relative z-10">
      <div className="flex gap-12 animate-slide whitespace-nowrap font-mono text-xs text-ink-dim">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{item}</span>
            <span className="text-accent font-medium">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
