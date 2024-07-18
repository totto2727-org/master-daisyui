import { Config } from "@master/css";
import { addGroupSuffix } from "../lib.ts";
import { convertThemeToMasterCss, createTheme, type ThemeBase } from "./lib.ts";

const themeBase = {
    "color-scheme": "dark",
    "primary": "oklch(65.69% 0.196 275.75)",
    "secondary": "oklch(74.8% 0.26 342.55)",
    "accent": "oklch(74.51% 0.167 183.61)",
    "neutral": "#2a323c",
    "neutral-content": "#A6ADBB",
    "base-100": "#1d232a",
    "base-200": "#191e24",
    "base-300": "#15191e",
    "base-content": "#A6ADBB",
} satisfies ThemeBase;

const theme = createTheme("dark", themeBase);

const classes = convertThemeToMasterCss(theme);

export const dark:string = addGroupSuffix(classes, "@dark");
export const darkTheme:Config = { variables: theme };
