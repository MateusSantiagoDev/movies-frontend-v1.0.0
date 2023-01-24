import * as Style from "./Style";
import { Select } from "../../components/options/select";
import { useState, useEffect } from "react";
import { Animes, Movies, Series } from "./types/types";
import { Api } from "../../data/api/api";
import { useNavigate } from "react-router-dom";
import { Path } from "../../types/routes";

export function Profile() {
  const [selectValue, setSelectValue] = useState<string>("");
  const [movie, setMovie] = useState<Movies[]>([]);
  const [serie, setSerie] = useState<Series[]>([]);
  const [anime, setAnime] = useState<Animes[]>([]);
  const navigate = useNavigate();

  const options = ["Movies", "Series", "Animes", "Profile"];
  const profileOption = "";

  async function getProfileMovies() {
    const data = await Api.getMovies();
    setMovie(data);
  }

  async function getProfileSeries() {
    const data = await Api.getSeries();
    setSerie(data);
  }

  async function getProfileNamine() {
    const data = await Api.getAnimes();
    setAnime(data);
  }

  useEffect(() => {
    getProfileMovies();
    getProfileSeries();
    getProfileNamine();
  }, []);

  return (
    <Style.profileDiv>
      <Style.profileHeader>
        <h1>Perfil do Usuário</h1>
      </Style.profileHeader>
      <Style.profilebuttonSair
          onClick={() => {
            navigate(Path.LOGIN);
          }}
        >
          Sair
        </Style.profilebuttonSair>
      <Style.profileBody>       
        <Select options={options} selectOptions={setSelectValue} />
        {selectValue === "Movies" && (
          <>
            {movie.map((el) => {
              return (
                <Style.profileElement key={el.id}>
                  <Style.profileCard>
                    <h3>{el.title}</h3>
                    <Style.profileImg src={el.image} alt="img" />
                    <p>{el.description}</p>
                    <p>{el.avaliation}</p>
                  </Style.profileCard>
                </Style.profileElement>
              );
            })}
          </>
        )}
        {selectValue === "Series" && (
          <>
            {serie.map((el) => {
              return (
                <Style.profileElement key={el.id}>
                  <Style.profileCard>
                    <h3>{el.title}</h3>
                    <Style.profileImg src={el.image} alt="img" />
                    <p>{el.description}</p>
                    <p>{el.avaliation}</p>
                  </Style.profileCard>
                </Style.profileElement>
              );
            })}
          </>
        )}
        {selectValue === "Animes" && (
          <>
            {anime.map((el) => {
              return (
                <Style.profileElement key={el.id}>
                  <Style.profileCard>
                    <h3>{el.title}</h3>
                    <Style.profileImg src={el.image} alt="img" />
                    <p>{el.description}</p>
                    <p>{el.avaliation}</p>
                  </Style.profileCard>
                </Style.profileElement>
              );
            })}
          </>
        )}
        {selectValue === "Profile" && <>{profileOption}</>}
      </Style.profileBody>
    </Style.profileDiv>
  );
}
