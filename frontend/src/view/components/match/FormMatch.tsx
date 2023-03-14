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
} from "@mui/material/";
import { formattedDate } from "../../utils";
import { handleRequestSaveMatch } from "../../handleRequest";

type FormErrors = Partial<MatchFormProps>;
interface MatchFormProps {
  teamA: string;
  teamB: string;
  matchDate: Date;
  score?: [number, number];
  value?: number;
  isOpen?: boolean;
}

export function MatchForm() {
  const [errors, setFormErrors] = useState<FormErrors>({} as FormErrors);
  const [formFields, setFormFields] = useState<MatchFormProps>({
    teamA: "",
    teamB: "",
    matchDate: new Date(),
    score: [0, 0],
    value: 0,
    isOpen: true,
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formErrors: FormErrors = {};
    if (!formFields.teamA) {
      formErrors.teamA = "Campo Obrigatório";
    }
    if (!formFields.teamB) {
      formFields.teamB = "Campo Obrigatório";
    }
    if (formFields.teamA === formFields.teamB) {
      formFields.teamB = "Seleção B deve ser diferente da seleção A";
    }

    setFormErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      (async () => {
        const {id, ...match} = formFields
        await handleRequestSaveMatch(match)
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

  const handleInputSelectChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
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
            >
              <MenuItem value="Team A">Team A</MenuItem>
              <MenuItem value="Team B">Team B</MenuItem>
              <MenuItem value="Team C">Team C</MenuItem>
            </Select>
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
            >
              <MenuItem value="Team A">Team A</MenuItem>
              <MenuItem value="Team B">Team B</MenuItem>
              <MenuItem value="Team C">Team C</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            label="Match Date"
            variant="filled"
            fullWidth
            margin="normal"
            type="date"
            name="matchDate"
            value={formFields.matchDate}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            label="Score"
            variant="outlined"
            fullWidth
            margin="normal"
            name="score"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={formFields.score?.[0]}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            label=" "
            variant="outlined"
            fullWidth
            margin="normal"
            name="score"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={formFields.score?.[1]}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
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
}
