import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { Avatar } from "@material-ui/core";

import { CountrySelect } from "./CountrySelect";
import CurrencySelect from "./CurrencySelect";
import LanguageSelect from "./LanguageSelect";

import "./styles.css";

const SettingsSelector = (): JSX.Element => {
  const [open, setOpen] = React.useState<any>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  interface CountrySelectIn {
    code?: string;
    name?: string;
  }

  const [country, setCountry] = React.useState<CountrySelectIn>({
    code: "US",
    name: "United States of Ameria",
  });
  const [currency, setCurrency] = React.useState<any>("USD");
  const [language, setLanguage] = React.useState<any>("en");

  return React.useMemo(
    () => (
      <div>
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          <Avatar
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
            alt="flag"
            src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/AC.svg"
          />
          - ({currency} - {language})
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="sm"
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">Change region</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ color: "#009FB4" }}>
              Select your region, currency and language.
            </DialogContentText>

            <CountrySelect
              value={country}
              onChange={(value) => setCountry(value)}
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CurrencySelect
                  value={currency}
                  onChange={(event) => setCurrency(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <LanguageSelect
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              color="primary"
              variant="contained"
              fullWidth
              autoFocus
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    ),
    [country, open, language, currency]
  );
};

export default SettingsSelector;
