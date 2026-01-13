// Hook para capturar e preservar UTM parameters

export const getUTMParams = (): string => {
  if (typeof window === "undefined") return "";
  
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = new URLSearchParams();
  
  // Lista de parâmetros UTM e tracking IDs
  const utmKeys = [
    "utm_source",
    "utm_medium", 
    "utm_campaign",
    "utm_term",
    "utm_content",
    "src",
    "sck",
    "fbclid",  // Facebook Click ID
    "gclid",   // Google Click ID
    "ttclid",  // TikTok Click ID
    "twclid"   // Twitter Click ID
  ];
  
  utmKeys.forEach((key) => {
    const value = urlParams.get(key);
    if (value) {
      utmParams.set(key, value);
    }
  });
  
  return utmParams.toString();
};

export const appendUTMToUrl = (baseUrl: string): string => {
  const utmString = getUTMParams();
  
  if (!utmString) return baseUrl;
  
  // Verifica se a URL já tem query params
  const separator = baseUrl.includes("?") ? "&" : "?";
  
  return `${baseUrl}${separator}${utmString}`;
};
