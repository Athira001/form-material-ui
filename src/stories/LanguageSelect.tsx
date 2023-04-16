import ISO_6391_Languages from "iso-639-1";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core";

import "./styles.css";

import type { ChangeEvent, ReactNode } from "react";

interface LanguageSelectProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>, child: ReactNode) => void;
}

const useStyles = makeStyles(() => ({
  label: {
    top: "-3px",
    background: "#fff",
    padding: "4px",
    zIndex: 1,
  },
}));

const LanguageSelect = ({ value = "en", onChange }: LanguageSelectProps) => {
  const LANGUAGES = ISO_6391_Languages.getLanguages([
    "en",
    "de",
    "pl",
    "fr",
    "it",
  ]);

  const classes = useStyles();
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="language-simple" className={classes.label}>
        Language
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{
          name: "language",
          id: "language-simple",
        }}
        className="select-input"
      >
        {LANGUAGES.map(({ code, name, nativeName }) => (
          <MenuItem key={name} value={code}>
            {name} - {nativeName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
