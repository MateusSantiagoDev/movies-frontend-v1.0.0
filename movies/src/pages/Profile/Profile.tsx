import * as Style from "./Style";
import { Select } from "../../components/options/select";
import { useState, useEffect } from "react";
import { Movies } from "../../types/elements/elements";
import { Api } from "../../data/api/api";

export function Profile() {
  const [select, setSelect] = useState<string>("");
  const [movie, setMovie] = useState<Movies[]>([])
  const options = ["Movies", "series", "animes"];
 
  async function getProfileMovies() {
    const data = await Api.getMovies();
    setMovie(data);
  }

  useEffect(() => {
    getProfileMovies();
  }, [])

 
  return (
    <div>
      <Select options={options} selectOptions={setSelect} />
      {select === "Movies" && (
        <>
          {movie.map((el) => {
            return <div key={el}>{el.title}</div>;
          })}
        </>
      )}
      ;
      <Select options={options} selectOptions={setSelect} />
      {Select === "Series" && (
        <>
          {series.map((el) => {
            return <div key={el}>{el}</div>;
          })}
        </>
      )}
      ;
      <Select options={options} selectOptions={setSelect} />
      {select === "Animes" && (
        <>
          {Animes.map((el) => {
            return <div key={el}>{el}</div>;
          })}
        </>
      )}
      ;
    </div>
  );
}
