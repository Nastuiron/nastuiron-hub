// src/components/ui/Badge.tsx

type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
      {children}
    </span>
  );
}
