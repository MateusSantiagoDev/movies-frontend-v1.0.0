import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { Path } from "../../types/routes";

export function Home() {
  const navigate = useNavigate();

  return (
    <Style.Home>
      <Style.PageHome></Style.PageHome>
      <Style.Menu>
        <Style.MenuItem
          onClick={() => {
           
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
            navigate(Path.FORM_MOVIE);
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
