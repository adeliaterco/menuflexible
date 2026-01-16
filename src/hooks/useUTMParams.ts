// src/hooks/useUTMParams.ts

const TRACK_KEY = "__TRACK_PARAMS__";

const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "src",
  "sck",
  "xcod",
  "fbclid",
  "gclid",
  "ttclid",
  "twclid",
  "bid",
];

export const getUTMParams = (): string => {
  if (typeof window === "undefined") return "";

  const out = new URLSearchParams();

  // 1) URL atual
  const urlParams = new URLSearchParams(window.location.search);
  KEYS.forEach((k) => {
    const v = urlParams.get(k);
    if (v) out.set(k, v);
  });

  // 2) fallback storage (local -> session)
  if ([...out.keys()].length === 0) {
    const stored =
      localStorage.getItem(TRACK_KEY) || sessionStorage.getItem(TRACK_KEY);

    if (stored) {
      const storedParams = new URLSearchParams(stored);
      KEYS.forEach((k) => {
        const v = storedParams.get(k);
        if (v) out.set(k, v);
      });
    }
  }

  return out.toString();
};

export const appendUTMToUrl = (baseUrl: string): string => {
  if (typeof window === "undefined") return baseUrl;

  const utmString = getUTMParams();
  if (!utmString) return baseUrl;

  const url = new URL(baseUrl);
  const incoming = new URLSearchParams(utmString);

  incoming.forEach((value, key) => {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });

  return url.toString();
};