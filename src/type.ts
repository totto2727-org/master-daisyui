import { VariableDefinitions } from "@master/css";

export type Theme = {
  "d-primary": VariableDefinitions;
  "d-secondary": VariableDefinitions;
  "d-accent": VariableDefinitions;
  "d-neutral": VariableDefinitions;
  "d-info": VariableDefinitions;
  "d-success": VariableDefinitions;
  "d-warning": VariableDefinitions;
  "d-error": VariableDefinitions;
  "d-base-100": VariableDefinitions;
  "d-base-200": VariableDefinitions;
  "d-base-300": VariableDefinitions;
  "d-primary-content": VariableDefinitions;
  "d-secondary-content": VariableDefinitions;
  "d-accent-content": VariableDefinitions;
  "d-neutral-content": VariableDefinitions;
  "d-info-content": VariableDefinitions;
  "d-success-content": VariableDefinitions;
  "d-warning-content": VariableDefinitions;
  "d-error-content": VariableDefinitions;
  "d-base-content": VariableDefinitions;
};

type RequiredThemeProperties = keyof Pick<
  Theme,
  "d-primary" | "d-secondary" | "d-neutral" | "d-accent"
>;

export type ThemeBase =
  & Pick<Record<keyof Theme, string>, RequiredThemeProperties>
  & Partial<Omit<Record<keyof Theme, string>, RequiredThemeProperties>>;
