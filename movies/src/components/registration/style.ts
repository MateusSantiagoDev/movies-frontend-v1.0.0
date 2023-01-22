import styled, { css } from "styled-components";

export const registration = styled.div`
${({theme}) => css`
background-color: ${theme.colors.primaryColor};
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`}
`;

export const registrationLogin = styled.div`
${({theme}) => css`
background-color: ${theme.colors.secundaryColor};
text-align: center;
height: 50vh;
width: 40%;
`}
`;

export const registrationform = styled.form`
${() => css`
display: flex;
flex-direction: column;
gap: 10px;
margin: 0 auto;
width: 60%;
margin-top: 3rem;
`}
`;

export const registrationDivButton = styled.div`
${({theme}) => css`
width: 60%;
height: 10vh;
background-color: ${theme.colors.primaryColor};
margin: 0 auto;
display: flex;
align-items: center;
gap: 10px;
`}
`;

export const registrationButton = styled.button`
${()=> css`
height: 50%;
width: 100%;

`}
`
