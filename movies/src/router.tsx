import { Routes, Route } from "react-router-dom";
import { Path } from "./types/routes";
import { Home } from './pages/Home/Home';

export function Router() {
  return (
    <Routes>
      <Route path={Path.HOME} element={<Home />} />
    </Routes>
  );
}
