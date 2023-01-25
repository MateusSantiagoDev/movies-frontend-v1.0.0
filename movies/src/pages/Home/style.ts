import { Children } from "react";
import styled, { css } from "styled-components";

export const Home = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.baseBg2};
    height: 100vh;
    width: 100%;
  `}
`;

export const PageHome = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    height: 100%;
    width: 80%;
  `}
`;

export const carouselHomeMovie = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    height: 25%;
    width: 100%;
  `}
`;

export const whapperHomeMovie = styled.div`
  width: 100%;
  font-size: 0;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
`;

export const chevronRightMovie = styled.img`
  ${({ theme }) => css`
  top: 15%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-10%);  
  right: 200px;

`}
`;

export const chevronLeghtMovie = styled.img` 
 ${({ theme }) => css`
  top: 15%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  transform: rotate(180deg);
  left: -5px;
`}
`;

export const carousel = styled.div`
 font-size: 0;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
`

export const chevronRightSerie = styled.img`
  ${({ theme }) => css`
  top: 40%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-10%);  
  right: 200px;

`}
`;

export const chevronLeghtSerie = styled.img` 
 ${({ theme }) => css`
  top: 40%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  transform: rotate(180deg);
  left: -5px;
`}
`;

export const chevronRightAnime = styled.img`
  ${({ theme }) => css`
  top: 70%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-10%);  
  right: 200px;

`}
`;

export const chevronLeghtAnime = styled.img` 
 ${({ theme }) => css`
  top: 70%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  transform: rotate(180deg);
  left: -5px;
`}
`;


export const Menu = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg3};
    height: 100%;
    width: 20%;
    text-align: center;
    padding-top: 2rem;
  `}
`;

export const MenuItem = styled.button`
  ${({ theme }) => css`
    margin: 1.5rem 2rem;
    cursor: pointer;
    border: none;
    font-family: ${theme.source.fontFamily};
    background-color: ${theme.colors.baseBg3};
  `}
`;
