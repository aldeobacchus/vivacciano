import { ref, computed } from "vue";

const CONFIGS = {
  FR: {
    defaultLocale: "fr",
    orderedLanguages: [
      { code: "fr", label: "Français", shortLabel: "FR" },
      { code: "en", label: "English", shortLabel: "EN" },
      { code: "it", label: "Italiano", shortLabel: "IT" },
    ],
  },
  IT: {
    defaultLocale: "it",
    orderedLanguages: [
      { code: "it", label: "Italiano", shortLabel: "IT" },
      { code: "en", label: "English", shortLabel: "EN" },
      { code: "fr", label: "Français", shortLabel: "FR" },
    ],
  },
  OTHER: {
    defaultLocale: "en",
    orderedLanguages: [
      { code: "en", label: "English", shortLabel: "EN" },
      { code: "it", label: "Italiano", shortLabel: "IT" },
      { code: "fr", label: "Français", shortLabel: "FR" },
    ],
  },
};

export function getCountryConfig(countryCode) {
  const code = (countryCode || "").toUpperCase();
  if (code === "FR") return CONFIGS.FR;
  if (code === "IT") return CONFIGS.IT;
  return CONFIGS.OTHER;
}

export function detectBrowserCountry() {
  const savedCountry = localStorage.getItem("user_country");
  if (savedCountry) {
    return savedCountry.toUpperCase();
  }

  // Check navigator languages
  const langs =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ""];

  for (const l of langs) {
    const lower = (l || "").toLowerCase();
    if (lower.startsWith("fr")) return "FR";
    if (lower.startsWith("it")) return "IT";
  }

  // Check timezone
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz.includes("Paris")) return "FR";
    if (tz.includes("Rome")) return "IT";
  } catch (e) {
    // Ignore timezone error
  }

  return "OTHER";
}

const currentCountry = ref(detectBrowserCountry());

export function useCountryLanguage() {
  const config = computed(() => getCountryConfig(currentCountry.value));
  const availableLanguages = computed(() => config.value.orderedLanguages);
  const defaultLocale = computed(() => config.value.defaultLocale);

  async function initIpDetection(i18nInstance) {
    if (localStorage.getItem("user_country")) return;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch("https://api.country.is/", {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.country) {
          const country = data.country.toUpperCase();
          localStorage.setItem("user_country", country);
          currentCountry.value = country;

          // If user hasn't explicitly set locale, set locale to new country default
          if (!localStorage.getItem("locale") && i18nInstance) {
            const newDefault = getCountryConfig(country).defaultLocale;
            if (i18nInstance.locale && i18nInstance.locale.value) {
              i18nInstance.locale.value = newDefault;
            }
          }
        }
      }
    } catch (e) {
      // Fallback detection remains active if network or API fails
    }
  }

  return {
    currentCountry,
    config,
    availableLanguages,
    defaultLocale,
    initIpDetection,
  };
}

export function getDefaultLocale() {
  const initialCountry = detectBrowserCountry();
  return getCountryConfig(initialCountry).defaultLocale;
}
