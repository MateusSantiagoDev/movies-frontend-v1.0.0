import Styled, {css} from 'styled-components';

export const MovieDiv = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg1};
height: auto;
min-height: 100vh;
width: 100%;
padding:2rem;
`}
`;

export const movieBody = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
display: flex;
flex-wrap: wrap;
margin: 0 auto;
height: auto;
min-height: 80vh;
width: 80%;
`}
`
export const movieCard = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg3};
height: 30vh;
width: 30%;
margin: 0 auto;
text-align: center;
border-radius: .2rem;
`}
`;

export const movieImg = Styled.img`
height: 70%;
width: 100%;
`;

export const movieDivButton = Styled.div`
${({theme}) => css`
height: 5vh;
width: 10%;
background-color: ${theme.colors.baseBg1};
`}
`;

export const movieButton = Styled.button`
${({theme}) => css`
background-color: ${theme.colors.baseBg3};
height: 100%;
width: 100%;
`}
`