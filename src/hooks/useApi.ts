import { useEffect, useState } from "react";
import { fetchApi } from "../api/client";

interface ApiState<T> {
  key: string;
  data: T | null;
  error: string | null;
}

// Custom hook untuk mengambil data dari API dan melacak statusnya.
// - loading: true selama hasil untuk request terbaru belum datang
// - error: pesan error kalau request gagal
// - retry: panggil untuk mengulang request (dipakai tombol "Try again")
export function useApi<T>(path: string) {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<ApiState<T>>({
    key: "",
    data: null,
    error: null,
  });

  // Kunci unik untuk setiap request. Berubah kalau path berganti
  // atau saat retry, sehingga hook tahu hasil lama sudah tidak berlaku.
  const key = `${path}#${attempt}`;

  useEffect(() => {
    const controller = new AbortController();

    fetchApi<T>(path, controller.signal)
      .then((data) => setState({ key, data, error: null }))
      .catch((err: unknown) => {
        if (controller.signal.aborted) return;
        const message =
          err instanceof Error ? err.message : "Something went wrong";
        setState({ key, data: null, error: message });
      });

    // Membatalkan request kalau komponen hilang atau path berubah sebelum selesai
    return () => controller.abort();
  }, [path, key]);

  // Loading tidak disimpan sebagai state terpisah, tetapi dihitung:
  // selama kunci hasil terakhir berbeda dengan kunci request sekarang, berarti masih menunggu.
  const loading = state.key !== key;

  return {
    data: loading ? null : state.data,
    error: loading ? null : state.error,
    loading,
    retry: () => setAttempt((n) => n + 1),
  };
}
