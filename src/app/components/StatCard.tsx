import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  bgColor?: string;
}

export function StatCard({ icon: Icon, label, value, bgColor = 'var(--color-primary)' }: StatCardProps) {
  return (
    <div
      className="p-3 sm:p-4 md:p-6 rounded-xl shadow-sm"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm mb-1 sm:mb-2" style={{ color: 'var(--color-text-secondary)' }}>
            {label}
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold break-words" style={{ color: 'var(--color-text-primary)' }}>
            {value}
          </p>
        </div>
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: bgColor, opacity: 0.1 }}
        >
          <Icon size={20} style={{ color: bgColor, opacity: 1 }} />
        </div>
      </div>
    </div>
  );
}
