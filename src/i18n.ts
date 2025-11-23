import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import React from 'react';

type Locale = 'en' | 'de';
const locales = ['en', 'de'] as const satisfies readonly Locale[];
const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({locale = defaultLocale}) => {
  // Validate that the requested locale is supported
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'UTC',
    now: new Date()
  };
});
