import type { Config } from "@master/css";
import { darkTheme, lightTheme } from "./theme.ts";

export const config: Config = {
    extends: [
        lightTheme,
        darkTheme,
    ],
    variables: {
        "transparent": "var(--transparent, transparent)",
        "current": "var(--current, currentColor)",
        "rounded-box": "var(--rounded-box, 1rem)",
        "rounded-btn": "var(--rounded-btn, 0.5rem)",
        "rounded-badge": "var(--rounded-badge, 1.9rem)",
        "animation-btn": "var(--animation-btn, 0.25s)",
        "animation-input": "var(--animation-input, 0.2s)",
        "btn-focus-scale": "var(--btn-focus-scale, 0.95)",
        "border-btn": "var(--border-btn, 1px)",
        "tab-border": "var(--tab-border, 1px)",
        "tab-radius": "var(--tab-radius, 0.5rem)",
    },
} satisfies Config;
