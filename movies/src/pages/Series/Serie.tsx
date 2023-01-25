import * as Style from "./Style";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Path } from "../../types/routes";
import { Card } from "./types/serieCard";
import { Api } from "../../data/api/api";

export function Serie() {
  const navigate = useNavigate();
  const [serie, setSerie] = useState<Card[]>([]);

  async function getAllSerie() {
    const response = await Api.getSerie();
    setSerie(response);
  }

  useEffect(() => {
    getAllSerie();
  }, []);

  return (
    <Style.Serie>
      <Style.SerieDivButton>
        <Style.SerieButton
          onClick={() => {
            navigate(Path.HOME);
          }}
        >
          Voltar
        </Style.SerieButton>
      </Style.SerieDivButton>
      <Style.SerieDiv>
        {serie.map((el, index) => (
          <Style.SerieBody key={index}>
            <h4>{el.title}</h4>
            <Style.SerieImg src={el.image} alt="img" />
            <p>{el.description}</p>
            <p>{el.avaliation}</p>
          </Style.SerieBody>
        ))}
      </Style.SerieDiv>
    </Style.Serie>
  );
}
