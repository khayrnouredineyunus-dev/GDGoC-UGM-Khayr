import { describe, expect, it } from "vitest";
import {
  emptyDraft,
  hasDraftContent,
  validateContact,
  type ContactValues,
} from "./contactValidation";

// Contoh isian yang lengkap dan benar, dipakai sebagai titik awal setiap test
const validValues: ContactValues = {
  firstName: "Khayr",
  lastName: "",
  email: "khayr@mail.ugm.ac.id",
  organization: "",
  subject: "Joining a study group",
  message: "I would like to join the next study group.",
  consent: true,
};

describe("validateContact", () => {
  it("returns no errors for a complete form", () => {
    expect(validateContact(validValues, "joining-learning")).toEqual({});
  });

  it("flags every required field when the form is empty", () => {
    const errors = validateContact({ ...emptyDraft, consent: false }, "");

    expect(Object.keys(errors).sort()).toEqual(
      [
        "category",
        "consent",
        "email",
        "firstName",
        "message",
        "subject",
      ].sort(),
    );
  });

  it("treats fields with only spaces as empty", () => {
    const errors = validateContact(
      { ...validValues, firstName: "   ", subject: "  " },
      "collaboration",
    );

    expect(errors.firstName).toBeDefined();
    expect(errors.subject).toBeDefined();
  });

  it("rejects an email without a valid format", () => {
    const errors = validateContact(
      { ...validValues, email: "khayr@mail" },
      "collaboration",
    );

    expect(errors.email).toBe(
      "Please enter a valid email, like name@example.com.",
    );
  });

  it("requires a message of at least 10 characters", () => {
    expect(
      validateContact({ ...validValues, message: "Hi there" }, "collaboration")
        .message,
    ).toBeDefined();
    expect(
      validateContact(
        { ...validValues, message: "Hello team" },
        "collaboration",
      ).message,
    ).toBeUndefined();
  });

  it("does not require the optional fields", () => {
    const errors = validateContact(
      { ...validValues, lastName: "", organization: "" },
      "general-inquiry",
    );

    expect(errors).toEqual({});
  });
});

describe("hasDraftContent", () => {
  it("is false for an empty draft", () => {
    expect(hasDraftContent(emptyDraft)).toBe(false);
  });

  it("is false when fields only contain spaces", () => {
    expect(hasDraftContent({ ...emptyDraft, message: "   " })).toBe(false);
  });

  it("is true once any field has text", () => {
    expect(hasDraftContent({ ...emptyDraft, lastName: "Yunus" })).toBe(true);
  });
});
