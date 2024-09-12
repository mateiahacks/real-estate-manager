import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function errorMessage(error: any) {
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.mesage ||
    error.toString()
  );
}
