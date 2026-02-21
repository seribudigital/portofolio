import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names with clsx
 * Usage: cn("base-class", conditional && "conditional-class", "another-class")
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
