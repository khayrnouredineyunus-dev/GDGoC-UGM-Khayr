// Logika form Contact dipisah dari tampilan supaya mudah dibaca dan dites.

export interface ContactValues {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  consent: boolean;
}

export type ContactErrors = Partial<
  Record<keyof ContactValues | "category", string>
>;

// Bagian form yang disimpan sebagai draft di localStorage.
// Checkbox persetujuan sengaja tidak ikut disimpan, supaya pengguna
// tetap harus mencentangnya secara sadar setiap kali mengirim.
export type ContactDraft = Omit<ContactValues, "consent">;

export const DRAFT_KEY = "gdgoc:contact-draft";

export const emptyDraft: ContactDraft = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
};

// true kalau ada minimal satu field draft yang sudah diisi.
export function hasDraftContent(draft: ContactDraft): boolean {
  return Object.values(draft).some((value) => value.trim() !== "");
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mengembalikan pesan error untuk setiap field yang belum valid.
// Kalau objeknya kosong, berarti form siap dikirim.
export function validateContact(
  values: ContactValues,
  category: string,
): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.firstName.trim())
    errors.firstName = "Please enter your first name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email, like name@example.com.";
  }
  if (!category) errors.category = "Please choose an inquiry category.";
  if (!values.subject.trim()) errors.subject = "Please add a short subject.";
  if (values.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  }
  if (!values.consent) {
    errors.consent = "Please agree so we can respond to your inquiry.";
  }

  return errors;
}

// Kelas Tailwind yang sama untuk semua input, select, dan textarea.
export const fieldClass =
  "w-full rounded-lg border bg-white px-4 text-[15px] text-ink placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/15 focus:outline-none";
