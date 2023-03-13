import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AppContext } from "./context";
import { Bets } from "./pages/Bets";
import { Matches } from "./pages/Matches";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Users } from "./pages/Users";

const PrivateRoutes: React.FC = () => {
  const id = localStorage.getItem("id");

  if (!id) return <Navigate replace to="/login" />;

  return <Outlet />;
};
const AdminRoutes: React.FC = () => {
  const id = localStorage.getItem("id");
  const { user } = useContext(AppContext);

  if (!id) return <Navigate replace to="/login" />;

  return <Outlet />;
};
export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/matches" element={<Matches />} />
        <Route path="/bets" element={<Bets />} />

        <Route element={<AdminRoutes />}>
          <Route path="/users" element={<Users />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
