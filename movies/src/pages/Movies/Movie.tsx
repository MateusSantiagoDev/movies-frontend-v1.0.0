import * as Style from './Style';
import { useState, useEffect } from 'react';
import { Card } from './types/movieCard';
import { Api } from '../../data/api/api';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../types/routes';

export function Movie() {
    const [movie, setMovie] = useState<Card[]>([]);
    const navigate = useNavigate();

    async function getMovies(){
       const response = await Api.getMovie()
       setMovie(response)
    }

    useEffect(()=> {
        getMovies()
    },[])

    return(
    <Style.MovieDiv>
        <Style.movieDivButton>
            <Style.movieButton onClick={() => {
               navigate(Path.HOME) 
            }}>Voltar
            </Style.movieButton>

        </Style.movieDivButton>
        <Style.movieBody>
            {movie.map((el, index) => (
                <Style.movieCard key={index}>
                    <h4>{el.title}</h4>
                    <Style.movieImg src={el.image} alt="img" />
                    <p>{el.description}</p>
                    <p>{el.avaliation}</p>                    
                </Style.movieCard>
            ))}

        </Style.movieBody>
    </Style.MovieDiv>
    )
}