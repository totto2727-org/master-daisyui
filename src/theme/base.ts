import type { Theme } from "../type.ts";

export const baseTheme: Required<
  Pick<
    Record<keyof Theme, string>,
    | "info"
    | "success"
    | "warning"
    | "error"
    | "base-100"
    | "info-content"
    | "success-content"
    | "warning-content"
    | "error-content"
  >
> = {
  info: "oklch(72.06% 0.191 231.6)",
  success: "oklch(64.8% 0.150 160)",
  warning: "oklch(84.71% 0.199 83.87)",
  error: "oklch(71.76% 0.221 22.18)",
  "base-100": "oklch(100% 0 0)",
  "info-content": "oklch(0% 0 0)",
  "success-content": "oklch(0% 0 0)",
  "warning-content": "oklch(0% 0 0)",
  "error-content": "oklch(0% 0 0)",
};
