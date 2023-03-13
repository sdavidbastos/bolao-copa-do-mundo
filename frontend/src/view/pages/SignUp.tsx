import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ISignUp } from "../types/requests";
import { handleRequestSignUp } from "../handleRequest";
import { AppContext } from "../context";

const initialFormValues: ISignUp = {
  name: "",
  email: "",
  password: "",
};

export const SignUp = () => {
  const{setUser} = useContext(AppContext);
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState<ISignUp>(initialFormValues);
  const [errors, setErrors] = useState<Partial<ISignUp>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validate form data
    const formErrors: Partial<ISignUp> = {};
    if (!formValues.name) {
      formErrors.name = "Por favor insira seu nome";
    }
    if (!formValues.email) {
      formErrors.email = "Por favor insira seu email";
    }
    if (!!formValues.email && !emailRegex.test(formValues.email)) {
      formErrors.email = "Email inválido";
    }
    if (!formValues.password) {
      formErrors.password = "Por favor insira sua senha";
    }

    if (!!formValues.password && formValues.password.length < 6) {
      formErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }

    // Update errors state and return if there are any errors
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
     const user = handleRequestSignUp(formValues);
      setUser(user)
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Typography component="h1" variant="h5">
        Resgistre-se
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Senha"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Resgistrar-se
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/">Tem uma conta?</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
