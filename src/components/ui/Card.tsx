// src/components/ui/Card.tsx

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-zinc-900/70 p-6 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
