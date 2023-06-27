'use client';

// from https://github.com/MafinBoy/next-themes-hydration
import {
  DetailedHTMLProps,
  Dispatch,
  HtmlHTMLAttributes,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { setCookie } from 'cookies-next';
import { Themes } from './ThemedHTML';

export type ThemeContextProps = {
  theme: Themes;
  setTheme: Dispatch<SetStateAction<Themes>>;
};

export type ThemeProviderProps = {
  hydrationTheme: Themes;
} & DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const defaultContext: ThemeContextProps = {
  theme: 'light',
  setTheme: (_) => {
    throw new Error(
      'In your layout.tsx replace the <html> tag with <ThemedHTML>'
    );
  },
};
export const useTheme = () => useContext(ThemeContext) ?? defaultContext;

export const ThemedHTMLClient = ({
  hydrationTheme,
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Themes>(hydrationTheme);

  useEffect(() => {
    setCookie('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html {...props} className={theme} />
    </ThemeContext.Provider>
  );
};
