import type { ButtonClassKey } from "@material-ui/core/Button";
import type { StyleRules } from "@material-ui/core/styles";

export const MuiButtonOverride: Partial<StyleRules<ButtonClassKey>> = {
  label: {
    fontWeight: 600,
  },
};
