import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLang: 'pt-BR',
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        },
        detection: {
            order: ['navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie']
          },
        interpolation: {
            escapeValue: false
          }
    });

    export default i18n;