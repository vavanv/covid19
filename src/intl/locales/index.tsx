import { mergeRight } from 'ramda';
import moment from 'moment';

import 'moment/locale/fr';

import { en } from '../../intl/locales/en';
import { fr } from '../../intl/locales/fr';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const messages: any = {
  en: en,
  fr: fr,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const momentLocales: any = {
  'en-US': 'en',
  'fr-FR': 'fr',
};

export const LOCALE = 'locale';

export const getLanguage = () => {
  const locale =
    localStorage.getItem(LOCALE) === null || localStorage.getItem(LOCALE) === ''
      ? 'en-US'
      : localStorage.getItem(LOCALE);
  return locale === null ? 'en-US' : locale;
};

export const DEFAULT_LANGUAGE = 'en'; // getLanguage();//;//;

export function getLocaleMessages(locale: string) {
  const lang = locale.split('-')[0];
  const momentLocale = momentLocales[locale] ? momentLocales[locale] : locale;
  moment.locale(momentLocale);
  return mergeRight(messages[DEFAULT_LANGUAGE], messages[lang]);
}
