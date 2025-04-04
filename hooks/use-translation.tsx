"use client"

import { useLanguage } from "@/contexts/language-context"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

// Define a recursive type for nested keys (optional but good for type safety)
// This creates types like 'meta.title' | 'nav.about' | etc.
// It might become complex for very deep objects.
// Let's keep it simple for now and use string, adding type safety later if needed.
// type PathImpl<T, Key extends keyof T> = Key extends string
//   ? T[Key] extends Record<string, any>
//     ? `${Key}.${PathImpl<T[Key], keyof T[Key]>}` | `${Key}`
//     : `${Key}`
//   : never;
// type Path<T> = PathImpl<T, keyof T>;
// type TranslationKey = Path<typeof en>;

export function useTranslation() {
  const { language } = useLanguage()

  const translations = {
    en,
    es,
  }

  // Change key type to string to allow nested keys like 'footer.twitter'
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations[language];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Return the key itself or a placeholder if not found
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }

    // Ensure the final result is a string
    if (typeof result === 'string') {
      return result;
    } else {
      console.warn(`Translation key "${key}" did not resolve to a string for language "${language}"`);
      return key; // Fallback to the key itself
    }
  }

  return { t }
}

