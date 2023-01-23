import { Routes, Route } from "react-router-dom";
import { Path } from "./types/routes";
import { Login } from "./components/login/login";
import { Registration } from "./components/registration/registration";
import { Home } from "./pages/Home/Home";
import { Movie } from "./pages/Movies/Movie";
import { Serie } from "./pages/Series/Serie";
import { Anime } from "./pages/Animes/Anime";

export function Router() {
  return (
    <Routes>
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.REGISTRATION} element={<Registration />} />
      <Route path={Path.HOME} element={<Home />} />
      <Route path={Path.MOVIES} element={<Movie/>}/>
      <Route path={Path.SERIES} element={<Serie/>} />
      <Route path={Path.ANIMES} element={<Anime/>} />
    </Routes>
  );
}
