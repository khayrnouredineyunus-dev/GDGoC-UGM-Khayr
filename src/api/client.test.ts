import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchApi } from "./client";

// Mengganti fetch bawaan dengan versi palsu yang membalas JSON tertentu,
// supaya test tidak bergantung pada internet atau server API yang sedang hidup.
function mockFetch(body: unknown, status = 200) {
  const fetchMock = vi.fn().mockResolvedValue(
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    }),
  );
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("fetchApi", () => {
  it("returns only the data field from a successful response", async () => {
    const fetchMock = mockFetch({
      success: true,
      count: 1,
      data: [{ id: "stay-curious" }],
    });

    const data = await fetchApi<{ id: string }[]>("/values");

    expect(data).toEqual([{ id: "stay-curious" }]);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://gdgoc-ugm-api.vercel.app/api/values",
      expect.objectContaining({ signal: undefined }),
    );
  });

  it("throws the API error message when success is false", async () => {
    mockFetch({ success: false, error: "Track not found" }, 404);

    await expect(fetchApi("/tracks/unknown")).rejects.toThrow(
      "Track not found",
    );
  });

  it("falls back to the status code when the API gives no message", async () => {
    mockFetch({ success: false }, 500);

    await expect(fetchApi("/values")).rejects.toThrow(
      "Request failed with status 500",
    );
  });

  it("passes the abort signal to fetch", async () => {
    const fetchMock = mockFetch({ success: true, data: [] });
    const controller = new AbortController();

    await fetchApi("/faqs", controller.signal);

    expect(fetchMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ signal: controller.signal }),
    );
  });
});
