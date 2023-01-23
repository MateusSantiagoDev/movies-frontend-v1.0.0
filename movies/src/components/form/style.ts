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

export const FormData = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
height: 60vh;
width: 40%;
`}
`