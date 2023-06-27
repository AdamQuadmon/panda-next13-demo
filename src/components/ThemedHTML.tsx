// from https://github.com/MafinBoy/next-themes-hydration
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

import { cookies } from 'next/headers';

import { ThemedHTMLClient } from './ThemedHTMLClient';

export type Themes = 'dark' | 'light';

export const getTheme = (theme?: Themes | undefined) => {
  theme = (theme ?? cookies().get('theme')?.value) as Themes | undefined;
  return theme ?? 'dark';
};

/**
 * Use component instead of `<html>` tag in your `layout.tsx`
 * @param props
 * @returns
 */
export const ThemedHTML = (
  props: DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>
) => {
  const themeCookie = getTheme();

  return <ThemedHTMLClient hydrationTheme={themeCookie} {...props} />;
};
