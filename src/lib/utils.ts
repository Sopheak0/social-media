import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m`;
  if (diffHr < 24) return `${diffHr}h`;
  if (diffDay < 7) return `${diffDay}d`;

  // If not this year, show dd/MM/yy
  if (date.getFullYear() !== now.getFullYear()) {
    return date.toLocaleDateString("en-GB"); // dd/MM/yyyy
  }

  // If this year, show "Jan 30" or "Dec 20"
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });
}
