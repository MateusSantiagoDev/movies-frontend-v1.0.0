import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Path } from "../../types/routes";
import chevron from "../../assets/images/chevron.png";

type teste = {
  image: string
}

export function Home() {
  const navigate = useNavigate();
 /*  const movieRef = useRef("null")
  const serieRef = useRef("null")
  const animeRef = useRef("null") */
  
  const [stateMovie, setStateMovie] = useState<teste[]>([])
  const [stateAnime, setStateAnime] = useState<teste[]>([])
  const [stateSerie, setStateSerie] = useState<teste[]>([])


   useEffect(() => {
    fetch("http://localhost:5173/static/movies.json").then((res)=> res.json()).then(setStateMovie)

    fetch("http://localhost:5173/static/series.json").then((res)=> res.json()).then(setStateSerie)

    fetch("http://localhost:5173/static/animes.json").then((res)=> res.json()).then(setStateAnime)

  }, []) 

 /*    if (!stateMovie || !stateMovie.length) {
    return null;
  }

  if (!stateSerie || !stateSerie.length) {
    return null;
  }

  if (!stateAnime || !stateAnime.length) {
    return null;
  }  */

 /*   const handleLeftClick = (e) => {
    e.preventDefault();
    movieRef.current.scrollLeft -= movieRef.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    movieRef.current.scrollLeft += movieRef.current.offsetWidth;
  };  */
 
 function logout(){
  
  localStorage.removeItem("token");
  navigate(Path.LOGIN);
 }
 

  return (
    <Style.Home>
      <Style.HomeLogoutDiv>
      <Style.HomeLogoutButton onClick={logout}>
        sair
      </Style.HomeLogoutButton>
      </Style.HomeLogoutDiv>
      <Style.PageHome>
        <h3>Movies</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
             <Style.chevronLeghtMovie  src={chevron} alt="chevron"/>
             <Style.carousel>          
              {stateMovie.map((el) => {
                console.log(el)
                return (
                  <Style.carouselItem src={el.image} alt="img"/>
                )
              })}
            </Style.carousel>
             <Style.chevronRightMovie src={chevron} alt="chevron" />
          </Style.whapperHomeMovie>
        </Style.carouselHomeMovie>
        <h3>Series</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
          <Style.chevronLeghtSerie src={chevron} alt="chevron"/>
          <Style.carousel >
          {stateSerie.map((el) => (
          <Style.carouselItem src={el.image} alt="img"/>
          ))}
            </Style.carousel>
          <Style.chevronRightSerie src={chevron} alt="chevron"/>
          </Style.whapperHomeMovie>          
        </Style.carouselHomeMovie>
        <h3>Animes</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
          <Style.chevronLeghtAnime src={chevron} alt="chevron"/>
          <Style.carousel >
          {stateAnime.map((el) => (
          <Style.carouselItem src={el.image} alt="img"/>
          ))}
          </Style.carousel>
          <Style.chevronRightAnime src={chevron} alt="chevron"/>
          </Style.whapperHomeMovie>          
        </Style.carouselHomeMovie>
      </Style.PageHome>
      <Style.Menu>
        <Style.MenuHomeDiv onClick={() => {           
           navigate(Path.FORM);
         }}>       
          crar perfil        
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv onClick={() => {
            navigate(Path.PROFILE);
          }}>       
          acessar perfil        
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv onClick={() => {                      
            navigate(Path.FORM_MOVIE);
          }}>       
          Adicionar um novo filme        
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv  onClick={() => {
            navigate(Path.MOVIES);
          }}>       
          Visualizar todos os filmes      
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv onClick={() => {
           
           navigate(Path.FORM_SERIE);
         }}>         
        Adicionar uma nova série        
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv onClick={() => {
            navigate(Path.SERIES);
          }}>       
          Vizualizar todas as Séries        
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv  onClick={() => {
            
            navigate(Path.FORM_ANIME);
          }}>       
          Adicionar um novo Anime       
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv onClick={() => {
            navigate(Path.ANIMES);
          }}>        
          Visualizar todos os Animes        
        </Style.MenuHomeDiv>
      </Style.Menu>
    </Style.Home>
  );
}
