/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import ProjetoCard from '../ProjetoCard';
import ProjetosWrapper from './styles/ProjetosWrapper.js';

const Title = styled.h2`
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

export default function Conteudo() {
  return (
    <ProjetosWrapper>
      <Title>MEUS PROJETOS</Title>
      <ProjetoCard />
    </ProjetosWrapper>
  );
}
