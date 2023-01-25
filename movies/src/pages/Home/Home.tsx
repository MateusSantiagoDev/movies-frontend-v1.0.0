import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Path } from "../../types/routes";
import chevron from "../../assets/images/chevron.png";


export function Home() {
  const navigate = useNavigate();
  const [stateMovie, setStateMovie] = useState([])
  const [stateAnime, setStateAnime] = useState([])
  const [stateSerie, setStateSerie] = useState([])


   useEffect(() => {
    fetch("http://localhost:5173/static/movies.json").then((response)=> response.json()).then(setStateMovie)

    fetch("http://localhost:5173/static/series.json").then((response)=> response.json()).then(setStateSerie)

    fetch("http://localhost:5173/static/animes.json").then((response)=> response.json()).then(setStateAnime)

  }, []) 

   if (!stateMovie || !stateMovie.length) {
    return null;
  }

  if (!stateSerie || !stateSerie.length) {
    return null;
  }

  if (!stateAnime || !stateAnime.length) {
    return null;
  } 

 

  return (
    <Style.Home>
      <Style.PageHome>
        <h3>Movies</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
             <Style.chevronLeghtMovie src={chevron} alt="chevron"/>
             <Style.carousel>
              {stateMovie.map((el) => (
            <Style.carouselItem src={el} alt="img"/>
            ))}
            </Style.carousel>
             <Style.chevronRightMovie src={chevron} alt="chevron"/>
          </Style.whapperHomeMovie>
        </Style.carouselHomeMovie>
        <h3>Series</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
          <Style.chevronLeghtSerie src={chevron} alt="chevron"/>
          <Style.carousel>
          {stateSerie.map((el) => (
          <Style.carouselItem src={el} alt="img"/>
          ))}
            </Style.carousel>
          <Style.chevronRightSerie src={chevron} alt="chevron"/>
          </Style.whapperHomeMovie>          
        </Style.carouselHomeMovie>
        <h3>Animes</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
          <Style.chevronLeghtAnime src={chevron} alt="chevron"/>
          <Style.carousel>
          {stateAnime.map((el) => (
          <Style.carouselItem src={el} alt="img"/>
          ))}
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
