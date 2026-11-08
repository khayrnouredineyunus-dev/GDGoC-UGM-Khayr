// Mengubah id seperti "join-a-group" menjadi label yang enak dibaca: "Join a group".
export function slugToLabel(slug: string): string {
  const words = slug.split("-").join(" ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}

// Mengganti em dash (—) di tengah kalimat dengan koma, misalnya
// "or even a postgraduate — you're welcome" menjadi
// "or even a postgraduate, you're welcome". En dash untuk rentang (2–4) tidak diubah.
export function removeEmDash(text: string): string {
  return text.replace(/\s*—\s*/g, ", ");
}
