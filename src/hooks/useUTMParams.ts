export const getUTMParams = (): string => {
  if (typeof window === "undefined") return "";

  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = new URLSearchParams();

  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "src",
    "sck",
    "xcod",   // <- CRÍTICO (você usa no anúncio)
    "fbclid",
    "gclid",
    "ttclid",
    "twclid",
    "bid",    // <- opcional (mas ajuda; aparece na Hotmart em alguns casos)
  ];

  utmKeys.forEach((key) => {
    const value = urlParams.get(key);
    if (value) utmParams.set(key, value);
  });

  return utmParams.toString();
};

export const appendUTMToUrl = (baseUrl: string): string => {
  const utmString = getUTMParams();
  if (!utmString) return baseUrl;

  // Preserva #hash (se existir)
  const [urlWithoutHash, hash] = baseUrl.split("#");

  // Mescla sem duplicar parâmetros (mais seguro do que concatenar string)
  const url = new URL(urlWithoutHash, window.location.origin);
  const incoming = new URLSearchParams(utmString);

  incoming.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  const finalUrl = url.toString();
  return hash ? `${finalUrl}#${hash}` : finalUrl;
};