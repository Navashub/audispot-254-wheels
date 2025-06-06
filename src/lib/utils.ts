
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageType(src: string): string {
  if (src.endsWith('.webp')) return 'image/webp';
  if (src.endsWith('.jpg') || src.endsWith('.jpeg')) return 'image/jpeg';
  if (src.endsWith('.png')) return 'image/png';
  if (src.endsWith('.gif')) return 'image/gif';
  if (src.endsWith('.avif')) return 'image/avif';
  return 'image/jpeg'; // Default
}

export function optimizeImageUrl(url: string): string {
  if (url.includes('unsplash.com') && !url.includes('&q=')) {
    // Add quality parameter for Unsplash images
    return `${url}${url.includes('?') ? '&' : '?'}q=80&auto=format`;
  }
  return url;
}
