import {
  generateDarkenColorFrom,
  generateForegroundColorFrom,
} from "./color.ts";
import type { Theme, ThemeBase } from "../type.ts";
import { baseTheme } from "../theme/base.ts";

export const convertThemeToCSSVariants = (
  theme: Record<string, string>,
): string => {
  return Object.entries(theme)
    .map(([k, v]) => `$${k}:${v}`)
    .map((v) => v.replaceAll(" ", "|"))
    .join(" ");
};

export const createTheme = (
  name: string,
  theme: ThemeBase,
): Theme => {
  const colorScheme = theme["color-scheme"];

  const primary = theme.primary;
  const secondary = theme.secondary;
  const accent = theme.accent;
  const neutral = theme.neutral;

  const info = theme.info ?? baseTheme.info;
  const success = theme.success ?? baseTheme.success;
  const warning = theme.warning ?? baseTheme.warning;
  const error = theme.error ?? baseTheme.error;

  const base100 = theme["base-100"] ?? baseTheme["base-100"];
  const base200 = theme["base-200"] ?? generateDarkenColorFrom(base100, 0.07);
  // 本家に習った実装
  const base300 = theme["base-300"] || (
    theme["base-200"]
      ? generateDarkenColorFrom(theme["base-200"], 0.07)
      : generateDarkenColorFrom(base100, 0.14)
  );

  const primaryContent = theme["primary-content"] ??
    generateForegroundColorFrom(primary, 0.8);
  const secondaryContent = theme["secondary-content"] ??
    generateForegroundColorFrom(secondary, 0.8);
  const accentContent = theme["accent-content"] ??
    generateForegroundColorFrom(accent, 0.8);
  const neutralContent = theme["neutral-content"] ??
    generateForegroundColorFrom(neutral, 0.8);

  const infoContent = theme["info-content"] ||
    (theme.info
      ? generateForegroundColorFrom(theme.info, 0.8)
      : baseTheme["info-content"]);
  const successContent = theme["success-content"] ||
    (theme.success
      ? generateForegroundColorFrom(theme.success, 0.8)
      : "oklch(0% 0 0)");
  const warningContent = theme["warning-content"] ||
    (theme.warning
      ? generateForegroundColorFrom(theme.warning, 0.8)
      : baseTheme["warning-content"]);
  const errorContent = theme["error-content"] ||
    (theme.error
      ? generateForegroundColorFrom(theme.error, 0.8)
      : baseTheme["error-content"]);

  const baseContent = theme["base-content"] ??
    generateForegroundColorFrom(base100, 0.8);

  return {
    "color-scheme": `${colorScheme}@${name}`,
    primary: `${primary}@${name}`,
    secondary: `${secondary}@${name}`,
    accent: `${accent}@${name}`,
    neutral: `${neutral}@${name}`,
    info: `${info}@${name}`,
    success: `${success}@${name}`,
    warning: `${warning}@${name}`,
    error: `${error}@${name}`,
    "base-100": `${base100}@${name}`,
    "base-200": `${base200}@${name}`,
    "base-300": `${base300}@${name}`,
    "primary-content": `${primaryContent}@${name}`,
    "secondary-content": `${secondaryContent}@${name}`,
    "accent-content": `${accentContent}@${name}`,
    "neutral-content": `${neutralContent}@${name}`,
    "info-content": `${infoContent}@${name}`,
    "success-content": `${successContent}@${name}`,
    "warning-content": `${warningContent}@${name}`,
    "error-content": `${errorContent}@${name}`,
    "base-content": `${baseContent}@${name}`,
  };
};
