type MetricProps = {
  label: string;
  value: string;
  suffix?: string;
  body: React.ReactNode;
};

export default function MetricCard({
  label,
  value,
  suffix,
  body,
}: MetricProps) {
  return (
    <div className="bg-bg-1 border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-35 hover:border-white/15 transition-colors">
      <div>
        <div className="card-label flex items-center gap-2 font-mono text-[11px] text-ink-mute uppercase tracking-wider mb-4">
          {label}
        </div>
        <div className="font-serif italic text-[64px] font-normal leading-[0.9] tracking-tight-3 ink-gradient">
          {value}
          {suffix && (
            <small className="text-[0.4em] text-ink-mute not-italic font-mono font-normal tracking-normal ml-1">
              {suffix}
            </small>
          )}
        </div>
      </div>
      <div className="text-[13px] text-ink-dim leading-snug">{body}</div>
    </div>
  );
}
