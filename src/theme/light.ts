import type { Config } from "@master/css";
import { addGroupSuffix } from "../lib/color.ts";
import { convertThemeToCSSVariants, createTheme } from "../lib/theme.ts";
import type { ThemeBase } from "../type.ts";

const themeBase = {
  "color-scheme": "light",
  primary: "oklch(49.12% 0.3096 275.75)",
  secondary: "oklch(69.71% 0.329 342.55)",
  "secondary-content": "oklch(98.71% 0.0106 342.55)",
  accent: "oklch(76.76% 0.184 183.61)",
  neutral: "#2B3440",
  "neutral-content": "#D7DDE4",
  "base-100": "oklch(100% 0 0)",
  "base-200": "#F2F2F2",
  "base-300": "#E5E6E6",
  "base-content": "#1f2937",
} satisfies ThemeBase;

const theme = createTheme("light", themeBase);

// const variantsUngrouped = convertThemeToCSSVariants(theme);

// const variants: string = addGroupSuffix(variantsUngrouped, "@light");

const config: Config = { variables: theme };

export { config as lightConfig };
