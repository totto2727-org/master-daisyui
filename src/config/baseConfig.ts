import type { Config } from "@master/css";

const theme: Config["variables"] = {
  "transparent": "transparent",
  "current": "currentColor",
  "border-radius": {
    box: "1rem",
    btn: "0.5rem",
    badge: "1.9rem",
    tab: "0.5rem",
  },
  "transition-duration": {
    btn: "0.25s",
    input: "0.2s",
  },
  transform: {
    "scale-btn-focus": "scale(0.95)",
  },
  "border-width": {
    btn: "1px",
    tab: "1px",
  },
};

export const baseConfig: Config = {
  defaultMode: "light",
  modes: {
    light: "media",
    dark: "media",
  },
  variables: theme,
  utilities: {
    "color-scheme": {
      "color-scheme": "light dark",
    },
  },
} satisfies Config;
