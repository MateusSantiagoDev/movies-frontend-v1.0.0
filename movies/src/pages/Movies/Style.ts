import Styled, {css} from 'styled-components';

export const MovieDiv = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg1};
height: 100vh;
width: 100%;
display: flex;
align-items: center;
`}
`;

export const movieBody = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
display: flex;
flex-wrap: wrap;
margin: 0 auto;
height: 80vh;
width: 80%;
`}
`
export const movieCard = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg3};
height: 10vh;
width: 10%;
margin: 0 auto;
`}
`