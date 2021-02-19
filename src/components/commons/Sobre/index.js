import React from 'react';
import styled, { css } from 'styled-components';
import { SobreWrapper } from './styles/SobreWrapper';
import { Card } from '../Card';

const fotoUrl = require("../../../../public/images/foto.jpg").default;

const SobreTexto = styled.h2`
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

export default function Sobre() {
    return(
        <SobreWrapper>
            <SobreTexto>SOBRE MIM</SobreTexto>
            <Card>
                <img src={fotoUrl} alt='Foto do Felipe Vash'/>
                <p>Com experiência em TI desde muito jovem, ganhador de bolsa de estudos integral, estudei WebDevelopment, Design Gráfico e Arquitetura de Rede ao longo dos anos e cresci em ambiente full tech, sempre pesquisando em todas as mídias.
                    Nasci na época do crescimento da internet e cresci na época da grande transição.
                    Tenho total experiência em todas as plataformas Windows, MacOS e Linux Ubuntu.
                    Apaixonado por tecnologia e como o futuro será construído a partir dela, busco sempre customizar minha configuração desde as especificações do hardware até o SO e aplicativos.
                    Movido pelo objetivo de acesso pleno e democrático a tecnologia, foco meus projetos tanto em desempenho, estética, responsividade quanto em acessibilidade para todas as pessoas.
                    Estudante ávido em busca constante de aperfeiçoamento e de novos conhecimentos e habilidades.
                </p>
            </Card>
        </SobreWrapper>
    )
}