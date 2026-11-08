import { describe, expect, it } from "vitest";
import { removeEmDash, slugToLabel } from "./format";

describe("slugToLabel", () => {
  it("turns a slug into a readable label", () => {
    expect(slugToLabel("join-a-group")).toBe("Join a group");
  });
});

describe("removeEmDash", () => {
  it("replaces an em dash with a comma", () => {
    expect(
      removeEmDash("or even a postgraduate — you're welcome to join."),
    ).toBe("or even a postgraduate, you're welcome to join.");
  });

  it("keeps en dashes used for ranges", () => {
    expect(removeEmDash("usually take 2–4 hours per week.")).toBe(
      "usually take 2–4 hours per week.",
    );
  });
});
