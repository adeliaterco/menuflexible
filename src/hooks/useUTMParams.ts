export const getUTMParams = (): string => {
  if (typeof window === "undefined") return "";

  const keys = [
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

  const out = new URLSearchParams();

  // 1) pega da URL atual
  const urlParams = new URLSearchParams(window.location.search);
  keys.forEach((k) => {
    const v = urlParams.get(k);
    if (v) out.set(k, v);
  });

  // 2) fallback: se a URL estiver limpa, pega do sessionStorage
  if ([...out.keys()].length === 0) {
    const stored = sessionStorage.getItem("__TRACK_PARAMS__");
    if (stored) {
      const storedParams = new URLSearchParams(stored);
      keys.forEach((k) => {
        const v = storedParams.get(k);
        if (v) out.set(k, v);
      });
    }
  }

  return out.toString();
};

export const appendUTMToUrl = (baseUrl: string): string => {
  const utmString = getUTMParams();
  if (!utmString) return baseUrl;

  // preserva hash (#...) se existir
  const [urlWithoutHash, hash] = baseUrl.split("#");

  // mescla params sem duplicar
  const url = new URL(urlWithoutHash, window.location.origin);
  const incoming = new URLSearchParams(utmString);

  incoming.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  const finalUrl = url.toString();
  return hash ? `${finalUrl}#${hash}` : finalUrl;
};