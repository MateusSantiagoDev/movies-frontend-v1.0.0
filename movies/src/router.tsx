import { Routes, Route } from "react-router-dom";
import { Path } from "./types/routes";
import { Login } from "./components/login/login";
import { Registration } from "./components/registration/registration";
import { Home } from "./pages/Home/Home";

export function Router() {
  return (
    <Routes>
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.REGISTRATION} element={<Registration />} />
      <Route path={Path.HOME} element={<Home />} />
    </Routes>
  );
}
