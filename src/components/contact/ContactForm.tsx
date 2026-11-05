import { useState, type ChangeEvent, type FormEvent } from "react";
import type { InquiryCategory } from "../../api/types";
import FormField from "./FormField";
import {
  emptyValues,
  fieldClass,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "./contactValidation";
import arrowWhite from "../../assets/arrow-right-white.svg";
import chevron from "../../assets/select-chevron.svg";

interface ContactFormProps {
  categories: InquiryCategory[] | null;
  loading: boolean;
  category: string;
  onCategoryChange: (id: string) => void;
}

// Atribut aksesibilitas untuk input yang sedang error,
// supaya pembaca layar ikut membacakan pesan error-nya.
function errorProps(id: string, error?: string) {
  return error
    ? { "aria-invalid": true, "aria-describedby": `${id}-error` }
    : {};
}

function borderClass(error?: string) {
  return error ? "border-g-red" : "border-line";
}

export default function ContactForm({
  categories,
  loading,
  category,
  onCategoryChange,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);
  // Setelah tombol kirim ditekan sekali, error diperbarui setiap kali pengguna mengetik
  const [attempted, setAttempted] = useState(false);

  function updateValue(name: keyof ContactValues, value: string | boolean) {
    const next = { ...values, [name]: value };
    setValues(next);
    if (attempted) setErrors(validateContact(next, category));
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    updateValue(name as keyof ContactValues, value);
  }

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    onCategoryChange(event.target.value);
    if (attempted) setErrors(validateContact(values, event.target.value));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values, category);
    setErrors(nextErrors);
    setAttempted(true);

    if (Object.keys(nextErrors).length > 0) {
      // Arahkan fokus ke field pertama yang bermasalah. Scroll dibuat ke tengah
      // layar supaya field tidak tertutup navbar yang menempel di atas.
      const firstInvalid = Object.keys(nextErrors)[0];
      const field = document.getElementById(`contact-${firstInvalid}`);
      field?.focus({ preventScroll: true });
      field?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setValues(emptyValues);
    setErrors({});
    setAttempted(false);
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="bg-surface flex flex-col items-start gap-4 rounded-3xl p-6 md:p-9"
      >
        <h2 className="text-2xl leading-[1.12] font-bold md:text-[30px]">
          Thanks, {values.firstName.trim()}!
        </h2>
        <p className="text-muted leading-[1.55]">
          Your message about “{values.subject.trim()}” passed all checks. This
          site is a demo, so the message isn’t sent anywhere yet.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="border-line text-primary hover:bg-primary-soft rounded-lg border bg-white px-5 py-3 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="bg-surface flex flex-col gap-6 rounded-3xl p-6 md:p-9"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl leading-[1.12] font-bold md:text-[30px]">
          Send us a message
        </h2>
        <span aria-hidden="true" className="text-primary text-[28px]">
          ↗
        </span>
      </div>
      <p className="text-muted text-[13px]">Fields marked * are required.</p>

      <div className="flex flex-col gap-6 sm:flex-row sm:gap-5">
        <FormField
          id="contact-firstName"
          label="First name *"
          error={errors.firstName}
          className="flex-1"
        >
          <input
            id="contact-firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Your first name"
            value={values.firstName}
            onChange={handleChange}
            className={`${fieldClass} h-13.5 ${borderClass(errors.firstName)}`}
            {...errorProps("contact-firstName", errors.firstName)}
          />
        </FormField>
        <FormField id="contact-lastName" label="Last name" className="flex-1">
          <input
            id="contact-lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Your last name"
            value={values.lastName}
            onChange={handleChange}
            className={`${fieldClass} border-line h-13.5`}
          />
        </FormField>
      </div>

      <FormField
        id="contact-email"
        label="Email address *"
        error={errors.email}
      >
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Where we can reply to you"
          value={values.email}
          onChange={handleChange}
          className={`${fieldClass} h-13.5 ${borderClass(errors.email)}`}
          {...errorProps("contact-email", errors.email)}
        />
      </FormField>

      <FormField id="contact-organization" label="University / organization">
        <input
          id="contact-organization"
          name="organization"
          type="text"
          autoComplete="organization"
          placeholder="Where you study or work (optional)"
          value={values.organization}
          onChange={handleChange}
          className={`${fieldClass} border-line h-13.5`}
        />
      </FormField>

      <FormField
        id="contact-category"
        label="Inquiry category *"
        error={errors.category}
      >
        <div className="relative">
          <select
            id="contact-category"
            value={category}
            onChange={handleCategoryChange}
            disabled={loading || !categories?.length}
            className={`${fieldClass} disabled:text-muted h-13.5 appearance-none pr-12 ${borderClass(errors.category)}`}
            {...errorProps("contact-category", errors.category)}
          >
            {loading && <option value="">Loading categories…</option>}
            {!loading && !categories?.length && (
              <option value="">Categories are unavailable</option>
            )}
            {categories?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          <img
            src={chevron}
            alt=""
            className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2"
          />
        </div>
      </FormField>

      <FormField id="contact-subject" label="Subject *" error={errors.subject}>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="A short introduction to your question"
          value={values.subject}
          onChange={handleChange}
          className={`${fieldClass} h-13.5 ${borderClass(errors.subject)}`}
          {...errorProps("contact-subject", errors.subject)}
        />
      </FormField>

      <FormField
        id="contact-message"
        label="Your message *"
        error={errors.message}
      >
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us a little about your question or idea…"
          value={values.message}
          onChange={handleChange}
          className={`${fieldClass} h-36.5 resize-y py-4 ${borderClass(errors.message)}`}
          {...errorProps("contact-message", errors.message)}
        />
      </FormField>

      <div className="flex flex-col gap-2">
        <label className="text-muted flex items-start gap-3 text-[13px] leading-[1.55]">
          <span className="flex size-6 shrink-0 items-center justify-center">
            <input
              id="contact-consent"
              type="checkbox"
              checked={values.consent}
              onChange={(event) => updateValue("consent", event.target.checked)}
              className="accent-g-blue size-4.5"
              {...errorProps("contact-consent", errors.consent)}
            />
          </span>
          I agree that the information I share can be used to respond to this
          inquiry.
        </label>
        {errors.consent && (
          <p id="contact-consent-error" className="text-g-red text-[13px]">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="bg-g-blue hover:bg-primary inline-flex h-13 shrink-0 items-center gap-4 self-start rounded-lg px-6 font-medium whitespace-nowrap text-white transition-colors"
        >
          Send message
          <img src={arrowWhite} alt="" className="size-5" />
        </button>
        <p className="text-muted text-xs leading-normal sm:w-[230px]">
          Please don’t include passwords or sensitive personal information.
        </p>
      </div>
    </form>
  );
}
