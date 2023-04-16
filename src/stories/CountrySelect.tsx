import countries from "i18n-iso-countries";

import { Avatar, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core";

import "./styles.css";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const useStyles = makeStyles(() => ({
  label: {
    top: "-3px",
    background: "#fff",
    padding: "4px",
    zIndex: 1,
  },
}));

interface CountrySelectProps {
  value?: { code?: string; name?: string };
  onChange?: (value: any) => void;
}

export const CountrySelect = ({
  value = {
    code: "US",
    name: "United States of Ameria",
  },
  onChange,
}: CountrySelectProps) => {
  const EN_COUNTRIES = countries.getNames("en", { select: "official" });
  const classes = useStyles();

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="country-simple" className={classes.label}>
        Country
      </InputLabel>
      <Select
        value={value.code}
        onChange={(event: any) => {
          const code = event.target.value;
          onChange({
            code: code,
            name: EN_COUNTRIES[code],
          });
        }}
        inputProps={{
          name: "country",
          id: "country-simple",
        }}
        className="select-input"
      >
        {Object.entries(EN_COUNTRIES).map(([code, name]) => (
          <MenuItem value={code} key={name}>
            <div className="menu-item">
              <Avatar
                style={{ width: "24px", height: "24px" }}
                alt={name}
                // Country flags are from this NPM package: https://www.npmjs.com/package/country-flag-icons
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
              />
              <Typography>{name}</Typography>
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountrySelect;
