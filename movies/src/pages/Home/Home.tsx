import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { Path } from "../../types/routes";
import chevron from "../../assets/images/chevron.png";

export function Home() {
  const navigate = useNavigate();

  return (
    <Style.Home>
      <Style.PageHome>
        <h3>Movies</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
             <Style.chevronLeghtMovie src={chevron} alt="chevron"/>
             <Style.carousel>
            
            </Style.carousel>
             <Style.chevronRightMovie src={chevron} alt="chevron"/>
          </Style.whapperHomeMovie>
        </Style.carouselHomeMovie>
        <h3>Series</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
          <Style.chevronLeghtSerie src={chevron} alt="chevron"/>
          <Style.carousel>
            
            </Style.carousel>
          <Style.chevronRightSerie src={chevron} alt="chevron"/>
          </Style.whapperHomeMovie>          
        </Style.carouselHomeMovie>
        <h3>Animes</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
          <Style.chevronLeghtAnime src={chevron} alt="chevron"/>
          <Style.carousel>

          </Style.carousel>
          <Style.chevronRightAnime src={chevron} alt="chevron"/>
          </Style.whapperHomeMovie>          
        </Style.carouselHomeMovie>
      </Style.PageHome>
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
           
            navigate(Path.FORM_SERIE);
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
            
            navigate(Path.FORM_ANIME);
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
