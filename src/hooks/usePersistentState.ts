import { useState } from "react";

// Seperti useState, tetapi nilainya juga disimpan di localStorage,
// sehingga tetap ada setelah halaman di-refresh.
export function usePersistentState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? (JSON.parse(stored) as T) : initialValue;
    } catch {
      // localStorage bisa tidak tersedia (misalnya mode privat) atau isinya rusak
      return initialValue;
    }
  });

  const setPersistentValue = (next: T) => {
    setValue(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      // Kalau gagal menyimpan, state di layar tetap berubah seperti biasa
    }
  };

  return [value, setPersistentValue] as const;
}
