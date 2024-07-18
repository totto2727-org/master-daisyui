import type { Config } from "@master/css";
import { createTheme } from "../lib/theme.ts";
import type { ThemeBase } from "../type.ts";

const themeBase = {
  primary: "oklch(49.12% 0.3096 275.75)",
  secondary: "oklch(69.71% 0.329 342.55)",
  "secondary-content": "oklch(98.71% 0.0106 342.55)",
  accent: "oklch(76.76% 0.184 183.61)",
  // neutral: "#2B3440", // original
  neutral: "oklch(32.18% 0.025 255.7)",
  // neutral-content: "#D7DDE4",
  "neutral-content": "oklch(89.5% 0.012 252.1)",
  "base-100": "oklch(100% 0 0)",
  // base-200: #F2F2F2, // original
  "base-200": "oklch(96.12% 0 0)",
  // base-300: #E5E6E6, // original
  "base-300": "oklch(92.42% 0.001 197.14)",
  // base-content: #1f2937, // original
  "base-content": "oklch(27.81% 0.03 256.85)",
} satisfies ThemeBase;

const theme = createTheme("@light", themeBase);

// const variantsUngrouped = convertThemeToCSSVariants(theme);

// const variants: string = addGroupSuffix(variantsUngrouped, "@light");

const config: Config = { variables: theme };

export { config as lightConfig };
