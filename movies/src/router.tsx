import { Routes, Route } from "react-router-dom";
import { Path } from "./types/routes";
import { HomeLogin } from './pages/HomeLogin/HomeLogin';

export function Router() {
  return (
    <Routes>
      <Route path={Path.HOME} element={<HomeLogin />} />
    </Routes>
  );
}
