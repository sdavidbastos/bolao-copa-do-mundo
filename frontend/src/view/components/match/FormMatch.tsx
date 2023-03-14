import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material/";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

import { handleRequestSaveMatch } from "../../handleRequest";
import { IMatch } from "../../types";
import { countries } from "../../../constants/country";

type FormErrors = Partial<MatchFormProps>;
type MatchFormProps = Omit<IMatch, "id">;

export const FormMatch = () => {
  const [errors, setFormErrors] = useState<FormErrors>({} as FormErrors);
  const [formFields, setFormFields] = useState<MatchFormProps>({
    teamA: "",
    teamB: "",
    matchDate: null,
    score: [0, 0],
    value: 30,
    isOpen: true,
  });
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formErrors: FormErrors = {};
    if (!formFields.teamA) {
      formErrors.teamA = "Campo Obrigatório";
    }
    if (!formFields.teamB) {
      formErrors.teamB = "Campo Obrigatório";
    }
    if (formFields.teamA === formFields.teamB) {
      formErrors.teamB = "Seleção B deve ser diferente da seleção A";
    }

    setFormErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      (async () => {
        await handleRequestSaveMatch(formFields);
      })();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleInputChangeScore = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const [a, b] = formFields.score;

    if (name === "scoreA")
      setFormFields({ ...formFields, score: [parseInt(value), b] });
    if (name === "scoreB")
      setFormFields({ ...formFields, score: [a, parseInt(value)] });
  };

  const handleInputSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="teamA">Seleção</InputLabel>
            <Select
              labelId="teamA-label"
              name="teamA"
              onChange={handleInputSelectChange}
              value={formFields.teamA}
              fullWidth
              error={Boolean(errors.teamA)}
            >
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
            {errors.teamA && <FormHelperText>{errors.teamA}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="teamB">Seleção</InputLabel>
            <Select
              labelId="teamB-label"
              name="teamB"
              onChange={handleInputSelectChange}
              value={formFields.teamB}
              fullWidth
              error={Boolean(errors.teamB)}
            >
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
            {errors.teamB && <FormHelperText>{errors.teamB}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              label="Data da partida"
              value={formFields.matchDate}
              onChange={handleInputChange}
              format="DD-MM-YYYY"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Value"
            variant="outlined"
            fullWidth
            margin="normal"
            name="value"
            type="number"
            inputProps={{ step: 0.01, min: 0 }}
            value={formFields.value}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            label="Placar 1"
            variant="outlined"
            fullWidth
            margin="normal"
            name="scoreA"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={formFields.score?.[0]}
            onChange={handleInputChangeScore}
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            label="Placar 2"
            variant="outlined"
            fullWidth
            margin="normal"
            name="scoreB"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={formFields.score?.[1]}
            onChange={handleInputChangeScore}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="isOpen"
                checked={formFields.isOpen}
                onChange={handleInputChange}
                color="primary"
              />
            }
            label="Is Open"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
