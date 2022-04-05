import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from 'locales/en/translation.json'
import esTranslation from 'locales/es/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: enTranslation
      },
      es: {
        translations: esTranslation
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: '.',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

export default i18n;