import styled, {css} from "styled-components";

export const Serie = styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg1};
height: auto;
min-height: 100vh;
width: 100%;
padding-top: 5%;
`}
`;

export const SerieDivButton = styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg3};
height: 5vh;
width: 5%;
margin-left: 2%;
display: flex;
align-items: center;
justify-content: center;
`}
`;

export const SerieButton = styled.button`
${({theme}) => css`
background-color: ${theme.colors.baseBg1};
height: 100%;
width: 100%;
cursor: pointer;
`}
`

export const SerieDiv = styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg3};
height: auto;
min-height: 80vh;
width: 80%;
margin:0 auto;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 10px;
`}
`;

export const SerieBody = styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
height: 30vh;
width: 20%;
border-radius: .3rem;
text-align: center;
margin-top: 1rem;
`}
`;

export const SerieImg = styled.img`
${({theme}) => css`
height: 70%;
width: 100%;
`}
`;
`}
`