import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Format date as YYYY-MM-DD HH:MM:SS
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function formatCurrency(amount: number): string {
  // Convert amount to a string with thousands separators and two decimal places
  const formattedAmount = amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Remove the currency symbol and replace it with 'Rp.'
  return formattedAmount.replace("IDR", "Rp.");
}
