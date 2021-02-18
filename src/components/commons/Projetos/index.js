import React from 'react';
import styled, { css } from 'styled-components';
import Projetos from '../Projeto/index.js';
import ProjetosWrapper from './styles/ProjetosWrapper.js';

const Title = styled.h2`
    background-color:#191919E6;
    color: ${({ theme }) => theme.colors.primary.main.color};
    font-family: 'Rubik', sans-serif;
    margin-top:0;
    margin-bottom:0;
    text-align: center;
    text-shadow: 3px 2px #000000;
    padding: 15px 0 15px 0;
    width:100%;
`;

export default function Conteudo() {
    return (
        <>
            <Title>MEUS PROJETOS</Title>
            <ProjetosWrapper>
              <Projetos/>
            </ProjetosWrapper>
        </>
    )
};