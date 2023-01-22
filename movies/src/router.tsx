import { Routes, Route } from "react-router-dom";
import { Path } from "./types/routes";


import { Login } from "./components/login/login";
import { Registration } from "./components/registration/registration";

export function Router() {
  return (
    <Routes>
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.REGISTRATION} element={<Registration />} />
    </Routes>
  );
}
