import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined)[]): string {
  return twMerge(clsx(inputs));
}

export function converDateToText(date: string | Date): string {
  let counter = 0;
  const text = new Date(date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });
  return text.replace(/ de/g, (match) => (++counter === 2 ? ", " : match));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
