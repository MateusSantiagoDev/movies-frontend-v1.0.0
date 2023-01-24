import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { Path } from "../../types/routes";
import { useAppContext } from "../../components/context/hook";

export function Home() {
  const navigate = useNavigate();

  const {
    stateFormProfile,
    setStateFormProfile,
    stateFormMovie,
    setStateFormMovie,
    stateFormSerie,
    setStateFormSerie,
    stateFormAnime,
    setStateFormAnime,
  } = useAppContext();

  return (
    <Style.Home>
      <Style.PageHome></Style.PageHome>
      <Style.Menu>
        <Style.MenuItem
          onClick={() => {
            setStateFormProfile(!stateFormProfile);
            navigate(Path.FORM);
          }}
        >
          crar perfil
        </Style.MenuItem>
        <Style.MenuItem
          onClick={() => {
            navigate(Path.PROFILE);
          }}
        >
          acessar perfil
        </Style.MenuItem>
        <Style.MenuItem
          onClick={() => {
            setStateFormMovie(!stateFormMovie);
            navigate(Path.FORM);
          }}
        >
          Adicionar um novo filme
        </Style.MenuItem>
        <Style.MenuItem
          onClick={() => {
            navigate(Path.MOVIES);
          }}
        >
          Visualizar todos os filmes
        </Style.MenuItem>
        <Style.MenuItem
          onClick={() => {
            setStateFormSerie(!stateFormSerie);
            navigate(Path.FORM);
          }}
        >
          Adicionar uma nova série
        </Style.MenuItem>
        <Style.MenuItem
          onClick={() => {
            navigate(Path.SERIES);
          }}
        >
          Vizualizar todas as Séries
        </Style.MenuItem>
        <Style.MenuItem
          onClick={() => {
            setStateFormAnime(!stateFormAnime);
            navigate(Path.FORM);
          }}
        >
          Adicionar um novo Anime
        </Style.MenuItem>
        <Style.MenuItem
          onClick={() => {
            navigate(Path.ANIMES);
          }}
        >
          Visualizar todos os Animes
        </Style.MenuItem>
      </Style.Menu>
    </Style.Home>
  );
}
