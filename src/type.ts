import { VariableDefinitions } from "@master/css";

export type Theme = {
  primary: VariableDefinitions;
  secondary: VariableDefinitions;
  accent: VariableDefinitions;
  neutral: VariableDefinitions;
  info: VariableDefinitions;
  success: VariableDefinitions;
  warning: VariableDefinitions;
  error: VariableDefinitions;
  "base-100": VariableDefinitions;
  "base-200": VariableDefinitions;
  "base-300": VariableDefinitions;
  "primary-content": VariableDefinitions;
  "secondary-content": VariableDefinitions;
  "accent-content": VariableDefinitions;
  "neutral-content": VariableDefinitions;
  "info-content": VariableDefinitions;
  "success-content": VariableDefinitions;
  "warning-content": VariableDefinitions;
  "error-content": VariableDefinitions;
  "base-content": VariableDefinitions;
};

type RequiredThemeProperties = keyof Pick<
  Theme,
  "primary" | "secondary" | "neutral" | "accent"
>;

export type ThemeBase =
  & Pick<Record<keyof Theme, string>, RequiredThemeProperties>
  & Partial<Omit<Record<keyof Theme, string>, RequiredThemeProperties>>;
