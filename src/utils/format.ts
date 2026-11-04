// Mengubah id seperti "join-a-group" menjadi label yang enak dibaca: "Join a group".
export function slugToLabel(slug: string): string {
  const words = slug.split("-").join(" ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}
