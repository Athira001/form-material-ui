import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { MuiButtonOverride } from "./overrides/MuiButton";
import { Palette } from "./Palette";
import { Typography } from "./Typography";

const theme = createTheme({
  palette: Palette,
  typography: Typography,
  overrides: {
    MuiButton: MuiButtonOverride,
  },
});

const ThemeProvider = (props): JSX.Element => {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export default ThemeProvider;
