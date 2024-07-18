import type { Config } from "@master/css";
import { createTheme } from "../lib/theme.ts";
import type { ThemeBase } from "../type.ts";

const themeBase = {
  "d-primary": "oklch(65.69% 0.196 275.75)",
  "d-secondary": "oklch(74.8% 0.26 342.55)",
  "d-accent": "oklch(74.51% 0.167 183.61)",
  // "neutral": "#2a323c", // original
  "d-neutral": "oklch(31.38% 0.021 254.14)",
  // "neutral-content": "#A6ADBB", // original
  "d-neutral-content": "oklch(74.65% 0.022 264.44)",
  // "base-100": "#1d232a", // original
  "d-base-100": "oklch(25.33% 0.016 252.42)",
  // "base-200": "#191e24", // original
  "d-base-200": "oklch(23.26% 0.014 253.1)",
  // "base-300": "#15191e", // original
  "d-base-300": "oklch(21.15% 0.012 254.09)",
  // base-content: #A6ADBB // original
  "d-base-content": "oklch(74.65% 0.022 264.44)",
} satisfies ThemeBase;

const theme = createTheme("@dark", themeBase);

// const variantsUngrouped = convertThemeToCSSVariants(theme);

// const variants:string = addGroupSuffix(variantsUngrouped, "@dark");

const config: Config = { variables: theme };

export { config as darkConfig };
