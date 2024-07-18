export type Theme = {
  "color-scheme": string;
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  "base-100": string;
  "base-200": string;
  "base-300": string;
  "primary-content": string;
  "secondary-content": string;
  "accent-content": string;
  "neutral-content": string;
  "info-content": string;
  "success-content": string;
  "warning-content": string;
  "error-content": string;
  "base-content": string;
};

type RequiredThemeProperties = keyof Pick<
  Theme,
  "color-scheme" | "primary" | "secondary" | "neutral" | "accent"
>;

export type ThemeBase =
  & Pick<
    Theme,
    RequiredThemeProperties
  >
  & Partial<
    Omit<
      Theme,
      RequiredThemeProperties
    >
  >;
