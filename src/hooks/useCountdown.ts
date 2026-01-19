import { useState, useEffect } from 'react';
import { calculateTimeRemaining, type TimeRemaining } from '@/utils/dateUtils';

/**
 * Custom hook for countdown timer functionality
 * @param targetDate - The date to count down to
 * @returns TimeRemaining object with current countdown state
 */
export function useCountdown(targetDate: string | Date): TimeRemaining {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    // Update immediately on mount
    setTimeRemaining(calculateTimeRemaining(targetDate));

    // Set up interval to update every second
    const interval = setInterval(() => {
      const newTime = calculateTimeRemaining(targetDate);
      setTimeRemaining(newTime);

      // Clear interval if countdown is complete
      if (newTime.isComplete) {
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeRemaining;
}
