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

export function formData(object: any) {
  const data = new FormData();
  Object.keys(object).forEach((key) => data.append(key, object[key]));
  return data;
}

export function formatDate(dateString: string): string {
  let date = new Date(dateString);

  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  let formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
