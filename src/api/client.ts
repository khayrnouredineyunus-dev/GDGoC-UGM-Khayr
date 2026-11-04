import type { ApiResponse } from "./types";

const BASE_URL =
  import.meta.env.VITE_API_URL ?? "https://gdgoc-ugm-api.vercel.app/api";

// Mengambil data dari satu endpoint, lalu mengembalikan isi "data"-nya saja.
// Kalau server membalas error (misalnya 404), fungsi ini melempar Error
// supaya bisa ditangkap dan ditampilkan sebagai error state.
export async function fetchApi<T>(
  path: string,
  signal?: AbortSignal,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, { signal });
  const body = (await response.json()) as ApiResponse<T>;

  if (!response.ok || !body.success) {
    throw new Error(
      body.error ?? `Request failed with status ${response.status}`,
    );
  }

  return body.data;
}
