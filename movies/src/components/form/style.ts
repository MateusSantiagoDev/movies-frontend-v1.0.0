import Styled, {css} from 'styled-components';

export const Form = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg1};
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`}
`;

export const FormCard = Styled.form`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
height: 60vh;
width: 40%;
padding-top: 5rem;
`}
`;

export const InputCard = Styled.input`
${({theme}) => css`
margin-top: 1rem;
border-radius: .1rem;
border: none;
cursor: pointer;
padding: .3rem;
`}
`

export const FormData = Styled.form`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
height: 60vh;
width: 40%;
text-align: center;
padding-top: 5rem;
`}
`;

export const inputProfile = Styled.input`
${({theme}) => css`
margin-top: 1rem;
border-radius: .1rem;
border: none;
cursor: pointer;
padding: .3rem;
`}
`;

export const divbuttonformProfile = Styled.div`
${({theme}) => css`
height: 10%;
width: 40%;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
margin: 0 auto;
padding: 2rem;
`}
`;

export const buttonformProfile = Styled.button`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
padding: 0 .3rem;
cursor: pointer;
color: ${theme.colors.baseBg3};
border-radius: .2rem;
`}
`