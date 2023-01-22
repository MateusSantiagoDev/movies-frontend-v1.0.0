import styled, { css } from "styled-components";

export const Body = styled.div`
${({ theme }) => css`
display:flex;
justify-content: center;
align-items: center;
background-color: ${theme.colors.baseBg1};
height: 100vh;
width: 100%;
font-family: ${theme.source.fontFamily};
`}
`; 

export const Login = styled.div`
${({theme}) => css`
display: flex;
align-items: center;
justify-content: center;
height: 60vh;
width: 40%;
margin: 0 auto;
background-color: ${theme.colors.baseBg2};
`}
`;

export const Form = styled.form`
${({ theme }) => css`
text-align: center;
padding-top: 3rem;
background-color: ${theme.colors.baseBg3};
height: 80%;
width: 80%;
border: solid 2px ${theme.colors.primaryColor};
border-radius: .5rem;
`}
`
export const Register = styled.div`
${() => css`
text-align: center;
font-weight: 700;
margin-top: 2rem;
`}
`;

export const ButtonRegister = styled.button`
${({theme}) => css`
font-family: ${theme.source.fontFamily};
font-size: ${theme.source.fontSize};
border: none;
background-color: ${theme.colors.baseBg3};
cursor: pointer;
`}
`