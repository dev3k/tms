import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "@/i18n/locales/en.json";
import arTranslation from "@/i18n//locales/ar.json";
import frTranslation from "@/i18n//locales/fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      fr: { translation: frTranslation },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ar", "fr"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
