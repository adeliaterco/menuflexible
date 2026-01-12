// GA4 Event Tracking Hook

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

type GAParams = Record<string, unknown>;

export const trackEvent = (
  eventName: string,
  params?: GAParams
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

// Track CTA button clicks
export const trackCTAClick = (buttonLocation: string) => {
  trackEvent("cta_click", {
    button_location: buttonLocation,
    button_text: "Quiero el Kit Completo",
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  trackEvent("section_view", {
    section_name: sectionName,
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent("scroll_depth", {
    percent_scrolled: percentage,
  });
};

// Track external link clicks (Hotmart)
export const trackPurchaseClick = () => {
  trackEvent("purchase_button_click", {
    button_location: "pricing_section",
    destination: "hotmart",
  });
};
