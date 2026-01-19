import { memo } from 'react';
import { padZero } from '@/utils/dateUtils';

interface TimeUnitProps {
  value: number;
  label: string;
  delay?: number;
}

export const TimeUnit = memo(({ value, label, delay = 0 }: TimeUnitProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-coral via-coral-light to-sage shadow-soft-md hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2"
        aria-label={`${value} ${label}`}
      >
        {padZero(value)}
      </div>
      <div className="text-sm sm:text-base md:text-lg font-medium text-white/90 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
});

TimeUnit.displayName = 'TimeUnit';
