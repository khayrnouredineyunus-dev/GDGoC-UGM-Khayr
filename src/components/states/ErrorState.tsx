interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

// Ditampilkan kalau request ke API gagal, lengkap dengan tombol untuk mencoba lagi.
export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="border-g-red/30 bg-g-red/5 flex flex-col items-start gap-4 rounded-2xl border p-6"
    >
      <div>
        <p className="text-ink font-medium">We couldn't load this section.</p>
        <p className="text-muted mt-1 text-sm">{message}</p>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="border-line text-primary hover:bg-surface rounded-lg border bg-white px-4 py-2 font-medium transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
