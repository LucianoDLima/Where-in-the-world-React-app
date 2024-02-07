import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

/**
 * Merge conflicting classes and conditional classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export { cn };
