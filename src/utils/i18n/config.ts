import {getLocales} from 'react-native-localize';
import {initReactI18next} from 'react-i18next';
import {default as i18n} from 'i18next';
import {default as enCommon} from './en/common';
import {default as jaCommon} from './ja/common';

export const defaultNS = 'common';

export const resources = {
  ja: {
    common: jaCommon,
  },
  en: {
    common: enCommon,
  },
};

const locales = getLocales();

i18n.use(initReactI18next).init({
  lng: locales && locales[0].languageCode,
  fallbackLng: 'en',
  debug: true,
  resources,
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
