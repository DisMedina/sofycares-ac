import { useCountdown } from '@/hooks/useCountdown';
import { TimeUnit } from './TimeUnit';

interface CountdownTimerProps {
  targetDate: string | Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(targetDate);

  if (isComplete) {
    return (
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-olive mb-4">
          We're Live!
        </h2>
        <p className="text-lg md:text-xl text-text-secondary">
          Our website is now available. Thank you for your patience!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-olive mb-8">
        Launching Soon
      </h2>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        role="timer"
        aria-live="polite"
        aria-atomic="true"
      >
        <TimeUnit value={days} label="Days" delay={0} />
        <TimeUnit value={hours} label="Hours" delay={100} />
        <TimeUnit value={minutes} label="Minutes" delay={200} />
        <TimeUnit value={seconds} label="Seconds" delay={300} />
      </div>
    </div>
  );
};
