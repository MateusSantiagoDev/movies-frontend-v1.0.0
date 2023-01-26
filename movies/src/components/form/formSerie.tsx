import * as Style from './style';
import { FormDataProfile } from './types/types';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { Path } from '../../types/routes';
import { Api } from '../../data/api/api';


export function FormSerie() {
    const navigate = useNavigate();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data: FormDataProfile = {
            title: e.currentTarget.gameTitle.value,
            description: e.currentTarget.description.value,
            avaliation: Number(e.currentTarget.avaliation.value),
            image: e.currentTarget.image.value,
        }

        const response = await Api.createSerie(data);
        if (response) {
          navigate(Path.SERIES);
        }



    }
    return (
        <Style.Form>
            <Style.FormCard onSubmit={handleSubmit}>
                <h3>Series</h3>
                <Style.InputCard type="text"
              placeholder="titulo da série"
              name="gameTitle"/>
                <Style.InputCard type="text"
              placeholder="descrição da série"
              name="description"/>
                <Style.InputCard type="number"
              placeholder="avaliação da série"
              name="avaliation"/>
                <Style.InputCard type="text"
              placeholder="URL da imagem da série"
              name="image"/>
              <Style.divbuttonformProfile>
            <Style.buttonformProfile type='submit'>
                Salvar
            </Style.buttonformProfile>
            <Style.buttonformProfile type='submit' onClick={() => {
                navigate(Path.HOME)
            }}>Voltar
            </Style.buttonformProfile>
            </Style.divbuttonformProfile>
            </Style.FormCard>
            
        </Style.Form>
    )
}