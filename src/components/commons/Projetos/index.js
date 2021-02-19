import React from 'react';
import styled from 'styled-components';
import ProjetoCard from '../ProjetoCard/index.js';
import ProjetosWrapper from './styles/ProjetosWrapper.js';

const Title = styled.h2`
    background-color:#191919E6;
    color: ${({ theme }) => theme.colors.primary.main.color};
    font-family: 'Rubik', sans-serif;
    font-size:1.5rem;
    font-weight:500;
    margin-top:0;
    margin-bottom:0;
    text-align: center;
    text-shadow: 2px 2px #000000;
    padding: 15px 0 15px 0;
    width:100%;
`;

const ConteudoWrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

export default function Conteudo() {
    return (
        <ConteudoWrapper>
            <Title>MEUS PROJETOS</Title>
            <ProjetosWrapper>
              <ProjetoCard/>
            </ProjetosWrapper>
        </ConteudoWrapper>
    )
};