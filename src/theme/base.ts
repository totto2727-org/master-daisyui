import type { Theme } from "../type.ts";

export const baseTheme: Required<
  Pick<
    Record<keyof Theme, string>,
    | "d-info"
    | "d-success"
    | "d-warning"
    | "d-error"
    | "d-base-100"
    | "d-info-content"
    | "d-success-content"
    | "d-warning-content"
    | "d-error-content"
  >
> = {
  "d-info": "oklch(72.06% 0.191 231.6)",
  "d-success": "oklch(64.8% 0.150 160)",
  "d-warning": "oklch(84.71% 0.199 83.87)",
  "d-error": "oklch(71.76% 0.221 22.18)",
  "d-base-100": "oklch(100% 0 0)",
  "d-info-content": "oklch(0% 0 0)",
  "d-success-content": "oklch(0% 0 0)",
  "d-warning-content": "oklch(0% 0 0)",
  "d-error-content": "oklch(0% 0 0)",
};
