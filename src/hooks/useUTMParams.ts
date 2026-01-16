// src/hooks/useUTMParams.ts

const TRACK_KEY = "__TRACK_PARAMS__";

const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
  "gclid",
  "ttclid",
  "twclid",
  "bid",
  // não incluí src/sck/xcod aqui porque vamos GERAR se faltar
];

export const getUTMParams = (): URLSearchParams => {
  if (typeof window === "undefined") return new URLSearchParams();

  // 1) URL atual
  const current = new URLSearchParams(window.location.search);

  // 2) fallback storage
  if ([...current.keys()].length === 0) {
    const stored =
      localStorage.getItem(TRACK_KEY) || sessionStorage.getItem(TRACK_KEY);
    if (stored) return new URLSearchParams(stored);
  }

  return current;
};

export const appendUTMToUrl = (baseUrl: string): string => {
  if (typeof window === "undefined") return baseUrl;

  const current = getUTMParams();

  const url = new URL(baseUrl);

  // 1) Copia UTMs + click ids
  KEYS.forEach((k) => {
    const v = current.get(k);
    if (v && !url.searchParams.has(k)) url.searchParams.set(k, v);
  });

  // 2) GARANTE ORIGEM PARA HOTMART: xcod/src (curto)
  const utmSource = current.get("utm_source") || "origem";

  if (!url.searchParams.has("xcod")) url.searchParams.set("xcod", utmSource);
  if (!url.searchParams.has("src")) url.searchParams.set("src", utmSource);

  return url.toString();
};