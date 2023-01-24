import * as Style from "./style";
import { FormDataProfile } from "./types/types";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { Path } from "../../types/routes";
import { Api } from "../../data/api/api";

export function FormMovie() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data: FormDataProfile = {
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
      avaliation: e.currentTarget.avaliation.value,
      image: e.currentTarget.image.value,
    };

    const response = await Api.createMovie(data);
    console.log(response);
    if (response.status === 200) {
      navigate(Path.MOVIES);
    }
  }
  
  return (
    <Style.Form>
      <Style.FormCard onSubmit={handleSubmit}>
        <h3>Movies</h3>
        <Style.InputCard
          type="text"
          placeholder="titulo do filme"
          name="title"
        />
        <Style.InputCard
          type="text"
          placeholder="descrição do filme"
          name="description"
        />
        <Style.InputCard
          type="number"
          placeholder="avaliação do filme"
          name="avaliation"
        />
        <Style.InputCard
          type="text"
          placeholder="URL da imagem do filme"
          name="image"
        />
        <Style.divbuttonformProfile>
          <Style.buttonformProfile
            type="submit"
            onClick={() => {
              navigate(Path.MOVIES);
            }}
          >
            Salvar
          </Style.buttonformProfile>
          <Style.buttonformProfile
            type="submit"
            onClick={() => {
              navigate(Path.LOGIN);
            }}
          >
            Voltar
          </Style.buttonformProfile>
        </Style.divbuttonformProfile>
      </Style.FormCard>
    </Style.Form>
  );
}
