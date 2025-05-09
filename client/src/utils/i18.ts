
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';


i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'as', 'bn', 'gu', 'kn', 'mai', 'ml', 'mr', 'or', 'pa', 'ta', 'te', 'ur'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
   
    react: {
      useSuspense: false,
    },
  });

export default i18n;
