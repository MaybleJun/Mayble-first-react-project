import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: 'ru',
        debug: __IS_DEV__,
        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
