import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Api } from "../../api/api";

interface FormFields {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const initialFormFields: FormFields = {
  email: "",
  password: "",
};
const initialFormErrors: FormErrors = {};
export function SignIn() {
  const [formFields, setFormFields] = useState<FormFields>(initialFormFields);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);
  const api = Api.getInstance();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation logic here

    if (!formFields.password) {
      formErrors.email = "Senha é obrigatória";
    }

    if (!/\S+@\S+\.\S+/.test(formFields.email)) {
      formErrors.email = "Email inválido";
    }

    setFormErrors(formErrors);

    // Handle form submission if there are no errors
    if (Object.keys(formErrors).length === 0) {
      api.userService.signIn("David@david.com", "123");
    }
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={formFields.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formFields.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signUp">{"Não tem conta? registre-se aqui"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
