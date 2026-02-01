type USPCardProps = {
  title: string;
  points: string[];
};

export const USPCard = ({ title, points }: USPCardProps) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-emerald-400/40">
      <h3 className="mb-4 text-xl font-semibold text-emerald-400">
        {title}
      </h3>

      <ul className="space-y-3 text-sm text-gray-300">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
