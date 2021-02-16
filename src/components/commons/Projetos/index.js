import React from 'react';
import styled, { css } from 'styled-components';
import Projeto from '../Projeto/index.js';
import ProjetosWrapper from './styles/ProjetosWrapper.js';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const Title = styled.h2`
    font-family: 'Rubik', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-left: 28px;
    padding-right: 28px;
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-shadow: 3px 2px #000000;
    margin-left: auto;
    margin-right: auto;
    margin-top:0;
    margin-bottom:0;
    padding: 12px;
    background-color:#191919E6;
    width:100%;

    ${breakpointsMedia({
    md: css`
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      width:100%;
      max-width: 1024px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1820px;
    `,
  })}
`;

export default function Projetos() {
    return (
        <>
            <Title>MEUS PROJETOS</Title>
            <ProjetosWrapper>
              <Projeto/>
              <Projeto/>
              <Projeto/>
            </ProjetosWrapper>
        </>
    )
};