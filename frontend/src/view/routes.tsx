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
import { Home } from "./pages/Home";
import { Matches } from "./pages/Matches";
import { NotFound } from "./pages/NotFound";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Unauthorized } from "./pages/Unauthorized";
import { Users } from "./pages/Users";

const PrivateRoutes: React.FC = () => {
  const id = localStorage.getItem("id");

  if (!id) return <Navigate replace to="/signIn" />;

  return <Outlet />;
};
const AdminRoutes: React.FC = () => {
  const id = localStorage.getItem("id");
  const { user } = useContext(AppContext);

  if (!id) return <Navigate replace to="/signIn" />;
  if (user?.isAdmin) return <Unauthorized />;

  return <Outlet />;
};
export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/bets" element={<Bets />} />

        <Route element={<AdminRoutes />}>
          <Route path="/users" element={<Users />} />
        </Route>
      </Route>
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
