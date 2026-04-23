import { Client } from "@/data/client";

type Props = {
  client: Client;
  index: number;
};

const toneMap = {
  accent: {
    border: "border-accent/25",
    bg: "bg-accent/10",
    text: "text-accent",
  },
  warning: {
    border: "border-warning/25",
    bg: "bg-warning/10",
    text: "text-warning",
  },
  blue: { border: "border-blue/25", bg: "bg-blue/10", text: "text-blue" },
  purple: {
    border: "border-purple/25",
    bg: "bg-purple/10",
    text: "text-purple",
  },
} as const;

export default function ClientCard({ client, index }: Props) {
  const tone = toneMap[client.tone];
  return (
    <div
      key={`${client.name}-${index}`}
      className="grid grid-cols-[40px_1fr_auto] gap-3.5 items-center px-2.5 py-3 rounded-lg hover:bg-bg-2 transition-colors"
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center font-serif italic text-lg border ${tone.border} ${tone.bg} ${tone.text}`}
      >
        {client.initial}
      </div>
      <div>
        <div className="text-sm font-medium text-ink">{client.name}</div>
        <div className="font-mono text-[10px] text-ink-mute mt-0.5">
          {client.project}
        </div>
      </div>
      <div className="font-mono text-[10px] text-ink-mute text-right">
        {client.dates}
      </div>
    </div>
  );
}
