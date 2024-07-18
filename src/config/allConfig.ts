import type { Config } from "@master/css";
import { baseConfig } from "./baseConfig.ts";
import { darkConfig, lightConfig } from "../theme.ts";

export const allThemeConfig: Config[] = [
  lightConfig,
  darkConfig,
];

export const allComponentConfig: Config[] = [];

export const allConfig: Config = {
  extends: [
    baseConfig,
    ...allThemeConfig,
    ...allComponentConfig,
  ],
};
