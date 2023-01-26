/* import * as Style from "./style";
import { FormEvent } from "react";
import { Card } from "../../pages/Movies/types/movieCard";
import { FormMovie } from './formMovie';
import { Api } from "../../data/api/api";

export type updateCard = {
  movieId: Card;
  handleControl: () => void;
  changeUpdatedMode: () => void;
};

export interface InputProps {
    placeholder: string;
    type: string | number;
    name: string;
    defaultValue?: string | number;
  }

export function FormMovieUpdate({ movieId, handleControl, changeUpdatedMode }: updateCard) {
const updateForm: InputProps[] = [
    {
      name: "gameTitle",
      placeholder: "titulo do filme",
      type: "text",
      defaultValue: movieId?.title,
    },
    {
      name: "description",
      placeholder: "descrição do filme",
      type: "text",
      defaultValue: movieId?.description,
    },
    {
      name: "avaliation",
      placeholder: "avaliação do filme",
      type: "number",
      defaultValue: movieId?.avaliation,
    },
    {
      name: "image",
      placeholder: "imagem do filme",
      type: "text",
      defaultValue: movieId?.image,
    }
]

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    const data = {
      title: e.currentTarget.gameTitle.value,
      description: e.currentTarget.description.value,
      avaliation: e.currentTarget.avaliation.value,
      image: e.currentTarget.image.value,     
    };

    await Api.updateMovie({ ...data, id: movieId.id });

    changeUpdatedMode()
    handleControl()
}

  return (
    <Style.FormMovieUpdate>
      <FormMovie title={"Atualizar Filme"} inputs={updateForm} onSubmit={handleSubmit} calcel={changeUpdatedMode}/>
    </Style.FormMovieUpdate>
  );

}
 */

export const teste = {}