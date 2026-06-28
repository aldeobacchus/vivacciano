import { createI18n } from "vue-i18n";

import fr from "./fr.json";
import en from "./en.json";
import it from "./it.json";

const savedLocale = localStorage.getItem("locale") || "fr";

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: "fr",

  messages: {
    fr,
    en,
    it,
  },
});

export default i18n;