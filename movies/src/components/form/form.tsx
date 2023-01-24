import * as Style from "./style";
import { Path } from "../../types/routes";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { Api } from "../../data/api/api";
import { FormInput } from "./types/types";

export function Form() {
  const [data, setData] = useState<boolean>(false);
    const navigate = useNavigate();

    function statusData() {
      setData(!data)
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data: FormInput = {
            movie: e.currentTarget.movie.value,
            serie: e.currentTarget.serie.value,
            anime: e.currentTarget.anime.value,
        }

        const response = await Api.createPorfile(data)
        if (response.status === 200) {            
            navigate(Path.HOME)
        }
        
    }

  return (
    <>
    {data ? (<>
      <Style.Form>
        <Style.FormCard>
          <Style.InputCard type="text" placeholder="titulo do filme" name="title"/>
          <Style.InputCard type="text" placeholder="descrição do filme" name="description"/>
          <Style.InputCard type="number" placeholder="avaliação do filme" name="avaliation"/>
          <Style.InputCard type="image" placeholder="URL com a foto do filme" name="image"/>
        </Style.FormCard>
      </Style.Form>
    
    </>):(
    <Style.Form>
      <Style.FormData onSubmit={handleSubmit}>
        <h2>Perfil</h2>
        <Style.inputProfile
          type="text"
          placeholder="digite o ID do filme"
          name="movie"
        />
        <Style.inputProfile
          type="text"
          placeholder="digite o ID da série"
          name="serie"
        />
        <Style.inputProfile
          type="text"
          placeholder="digite o ID do anime"
          name="anime"
        />
        <Style.divbuttonformProfile>
          <Style.buttonformProfile type="submit" onClick={()=> {
            navigate(Path.HOME)
          }}>
            Salvar
          </Style.buttonformProfile>
          <Style.buttonformProfile type="submit" onClick={() => {
            navigate(Path.LOGIN)
          }}>
            voltar
          </Style.buttonformProfile>
        </Style.divbuttonformProfile>
      </Style.FormData>
    </Style.Form>
    )}
    </>
  );
}
