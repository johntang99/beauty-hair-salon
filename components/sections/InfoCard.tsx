interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function InfoCard({ title, children, className = '' }: InfoCardProps) {
  return (
    <div className={`bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] border border-[color-mix(in_srgb,var(--brand)_20%,transparent)] rounded-xl p-6 ${className}`}>
      <h3 className="font-bold text-subheading mb-4 text-gray-900">{title}</h3>
      {children}
    </div>
  );
}
