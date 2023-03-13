import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { handleRequestSignIn } from "../handleRequest";
import { ISignIn } from "../types/requests";
import { AppContext } from "../context";

type FormErrors = Partial<ISignIn>;

const initialFormFields: ISignIn = {
  email: "",
  password: "",
};
const initialFormErrors: FormErrors = {};
export function SignIn() {
  const { setUser } = React.useContext(AppContext);
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState<ISignIn>(initialFormFields);
  const [errors, setFormErrors] = useState<FormErrors>(initialFormErrors);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formErrors: FormErrors = {};
    if (!formFields.password) {
      formErrors.password = "Senha é obrigatória";
    }

    if (!/\S+@\S+\.\S+/.test(formFields.email)) {
      formErrors.email = "Email inválido";
    }

    setFormErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      (async () => {
        const user = await handleRequestSignIn(formFields);
        setUser(user);
        navigate("/");

      })();
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
            error={Boolean(errors.email)}
            helperText={errors.email}
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
            error={Boolean(errors.password)}
            helperText={errors.password}
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
