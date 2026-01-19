export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

/**
 * Calculate the time remaining until a target date
 * @param targetDate - The target date as a string or Date object
 * @returns TimeRemaining object with days, hours, minutes, seconds
 */
export function calculateTimeRemaining(targetDate: string | Date): TimeRemaining {
  const target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
  const now = Date.now();
  const difference = target.getTime() - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  };
}

/**
 * Zero-pad a number to ensure it has at least 2 digits
 * @param num - The number to pad
 * @returns Padded string
 */
export function padZero(num: number): string {
  return num.toString().padStart(2, '0');
}

/**
 * Validate if a date string is valid
 * @param dateString - The date string to validate
 * @returns true if valid, false otherwise
 */
export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}
