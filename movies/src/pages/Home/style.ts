import styled, { css } from "styled-components";

export const Home = styled.div`
${({theme}) => css`
display: flex;
justify-content: center;
align-items: center;
background-color: ${theme.colors.baseBg2};
height: 100vh;
width: 100%;
`}
`;

export const PageHome = styled.div`
${({theme})=> css`
background-color: ${theme.colors.baseBg1};
height: 100%;
width: 80%;
`}
`

export const Menu = styled.div`
${({theme})=> css`
background-color: ${theme.colors.baseBg3};
height: 100%;
width: 20%;
`}
`;

