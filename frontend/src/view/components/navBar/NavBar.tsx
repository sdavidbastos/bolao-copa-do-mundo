import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";

const adminRoutes: { path: string; name: string }[] = [
  {
    path: "/matches",
    name: "matches",
  },
  {
    path: "/bets",
    name: "bets",
  },
  {
    path: "/users",
    name: "users",
  },
];
const userRoutes: { path: string; name: string }[] = [
  {
    path: "/matches",
    name: "matches",
  },
  {
    path: "/bets",
    name: "bets",
  },
];
export const NavBar: React.FC = () => {
  let navigate = useNavigate();
  let { user } = useContext(AppContext);
  const routes = user?.isAdmin ? adminRoutes : userRoutes
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/signIn");
  };
  return (
    <AppBar position="sticky">
      <Grid container flexDirection={"row"}>
        {routes.map(({ path, name }, index) => (
          <Toolbar key={index}>
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
        <Toolbar>
          <Button onClick={() => logOut()}>Sair</Button>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};
