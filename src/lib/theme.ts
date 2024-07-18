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
  const primary = theme["d-primary"];
  const secondary = theme["d-secondary"];
  const accent = theme["d-accent"];
  const neutral = theme["d-neutral"];

  const info = theme["d-info"] ?? baseTheme["d-info"];
  const success = theme["d-success"] ?? baseTheme["d-success"];
  const warning = theme["d-warning"] ?? baseTheme["d-warning"];
  const error = theme["d-error"] ?? baseTheme["d-error"];

  const base100 = theme["d-base-100"] ?? baseTheme["d-base-100"];
  const base200 = theme["d-base-200"] ?? generateDarkenColorFrom(base100, 0.07);
  // 本家に習った実装
  const base300 = theme["d-base-300"] || (
    theme["d-base-200"]
      ? generateDarkenColorFrom(theme["d-base-200"], 0.07)
      : generateDarkenColorFrom(base100, 0.14)
  );

  const primaryContent = theme["d-primary-content"] ??
    generateForegroundColorFrom(primary, 0.8);
  const secondaryContent = theme["d-secondary-content"] ??
    generateForegroundColorFrom(secondary, 0.8);
  const accentContent = theme["d-accent-content"] ??
    generateForegroundColorFrom(accent, 0.8);
  const neutralContent = theme["d-neutral-content"] ??
    generateForegroundColorFrom(neutral, 0.8);

  const infoContent = theme["d-info-content"] ||
    (theme["d-info"]
      ? generateForegroundColorFrom(theme["d-info"], 0.8)
      : baseTheme["d-info-content"]);
  const successContent = theme["d-success-content"] ||
    (theme["d-success"]
      ? generateForegroundColorFrom(theme["d-success"], 0.8)
      : "oklch(0% 0 0)");
  const warningContent = theme["d-warning-content"] ||
    (theme["d-warning"]
      ? generateForegroundColorFrom(theme["d-warning"], 0.8)
      : baseTheme["d-warning-content"]);
  const errorContent = theme["d-error-content"] ||
    (theme["d-error"]
      ? generateForegroundColorFrom(theme["d-error"], 0.8)
      : baseTheme["d-error-content"]);

  const baseContent = theme["d-base-content"] ??
    generateForegroundColorFrom(base100, 0.8);

  return {
    "d-primary": { [name]: `${primary}` },
    "d-secondary": { [name]: `${secondary}` },
    "d-accent": { [name]: `${accent}` },
    "d-neutral": { [name]: `${neutral}` },
    "d-info": { [name]: `${info}` },
    "d-success": { [name]: `${success}` },
    "d-warning": { [name]: `${warning}` },
    "d-error": { [name]: `${error}` },
    "d-base-100": { [name]: `${base100}` },
    "d-base-200": { [name]: `${base200}` },
    "d-base-300": { [name]: `${base300}` },
    "d-primary-content": { [name]: `${primaryContent}` },
    "d-secondary-content": { [name]: `${secondaryContent}` },
    "d-accent-content": { [name]: `${accentContent}` },
    "d-neutral-content": { [name]: `${neutralContent}` },
    "d-info-content": { [name]: `${infoContent}` },
    "d-success-content": { [name]: `${successContent}` },
    "d-warning-content": { [name]: `${warningContent}` },
    "d-error-content": { [name]: `${errorContent}` },
    "d-base-content": { [name]: `${baseContent}` },
  };
};
