import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const routes: { path: string; name: string }[] = [
  {
    path: "/matches",
    name: "Matches",
  },
  {
    path: "/users",
    name: "Users",
  },
  {
    path: "/bets",
    name: "Bets",
  },
  {
    path: "/",
    name: "Sair",
  },
];
export const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Grid container flexDirection={"row"}>
        {routes.map(({ path, name }) => (
          <Toolbar>
            <Typography variant="h6">
              <Link
                to={path}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {name}
              </Link>
            </Typography>
          </Toolbar>
        ))}
      </Grid>
    </AppBar>
  );
};
