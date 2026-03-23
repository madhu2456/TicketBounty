"use client";

import { ThemeProvider as BaseThemeProvider } from "next-themes";

type ThemeProviderPropsType = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderPropsType) => {
  return (
    <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  );
};

export { ThemeProvider };
