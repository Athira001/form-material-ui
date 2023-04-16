import CurrencyData from "currency-codes/data";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core";
import "./styles.css";

import type { ChangeEvent, ReactNode } from "react";

interface CurrencySelectProps {
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

const CurrencySelect = ({ value = "USD", onChange }: CurrencySelectProps) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="currency-simple" className={classes.label}>
        Currency
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{
          name: "currency",
          id: "currency-simple",
        }}
        className="select-input"
      >
        {CurrencyData.map(({ code, currency }) => (
          <MenuItem key={code} value={code}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelect;
