import type { Palette } from "@material-ui/core/styles/createPalette";
import type { TypographyOptions } from "@material-ui/core/styles/createTypography";

export const Typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions) = {
  fontFamily: [
    "Quicksand",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
  ].join(","),
};
