interface EmptyStateProps {
  message: string;
}

// Ditampilkan kalau request berhasil tetapi datanya kosong.
export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="border-line text-muted rounded-2xl border border-dashed p-6 text-center">
      {message}
    </div>
  );
}
