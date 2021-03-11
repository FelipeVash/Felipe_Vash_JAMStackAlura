/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import React from 'react';
import styled, { css } from 'styled-components';
import { Text } from '../../foundation/Text';
import { SobreWrapper } from './styles/SobreWrapper';
import { Card } from '../Card';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const fotoUrl = require('../../../../public/images/foto.jpg').default;
const jamstackLogo = require('../../../../public/images/jamstackLogo.png').default;
const fccLogo = require('../../../../public/images/fccLogo.png').default;
const nextjsLogo = require('../../../../public/images/nextjsLogo.png').default;

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

const CardSobre = styled(Card)`
  align-items: center;
  border-radius: 15px;
  margin: 10px;
  padding: 15px;
  width: 100%;
  .avatar{
    width:10%;
    min-width:150px;
    min-height:150px;
    border-radius: 50%;
    border: 8px groove ${({ theme }) => theme.colors.borders.primary.color};
  }
  img{
    all:initial;
    width:100%;
    max-width:150px;
  }
  ${breakpointsMedia({
    sm: css`
      max-width:none;
    `,
    md: css`
      max-width:none;
    `,
    lg: css`
      max-width:none;
    `,
    xl: css`
      flex-direction:row;
      flex-wrap: wrap;
      max-width:950px;
      min-height:250px;
    `,
    xxl: css`
      max-width:950px;
      min-height:333.88px;
    `,
    uhd: css`
      max-width:1200px;
      min-height: 400px;
      .avatar{
        min-width:180px;
      }
      p{
        font-size:1.2rem;
      }
    `,
  })}
  &:hover,
  &:focus {
      box-shadow: 1px 1px 10px 5px black;
      cursor: default;
      transform: none;
  }
`;

const LogosContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  img {
    margin-top: 10px;
  }
  .next {
    width:100%;
    max-width: 100px;
  }
  .bootcamp {
    filter: invert(1);
    max-width: 80px;
  }
  .alura {
    filter: invert(1);
    max-width: 80px;
  }
  ${breakpointsMedia({
    md: css`
      flex-direction:row;
      flex-wrap: wrap;
    `,
  })}
`;

export default function Sobre() {
  return (
    <SobreWrapper>
      <SobreTexto>SOBRE MIM</SobreTexto>
      <CardSobre>
        <img className="avatar" src={fotoUrl} alt="Foto do Felipe Vash" />
        <Text as="p" variant="paragraph1" margin="20px" color="#000002">
          Com experiência em TI desde muito jovem, ganhador de bolsa de estudos integral, estudei WebDevelopment, Design Gráfico e Arquitetura de Rede ao longo dos anos e cresci em ambiente full tech, sempre pesquisando em todas as mídias.
          Nasci na época do crescimento da internet e cresci na época da grande transição.
          Tenho total experiência em todas as plataformas Windows, MacOS e Linux Ubuntu.
          Apaixonado por tecnologia e como o futuro será construído a partir dela, busco sempre customizar minha configuração desde as especificações do hardware até o SO e aplicativos.
          Movido pelo objetivo de acesso pleno e democrático a tecnologia, foco meus projetos tanto em desempenho, estética, responsividade quanto em acessibilidade para todas as pessoas.
          Estudante ávido em busca constante de aperfeiçoamento e de novos conhecimentos e habilidades.
        </Text>
        <LogosContainer>
          <img src={jamstackLogo} alt="Logo JamStack." />
          <img src={fccLogo} alt="Logo FreeCodeCamp" />
          <img className="next" src={nextjsLogo} alt="Logo NextJS" />
          <img className="alura" src="https://www.alura.com.br/assets/img/home/alura-logo.1570550707.svg" alt="Logo Alura Cursos de Tecnologia" />
          <img className="bootcamp" src="https://bootcamps.alura.com.br/assets/images/logos/logo-alurabootcamp.svg" alt="Logo BootCamp Alura" />
        </LogosContainer>
      </CardSobre>
    </SobreWrapper>
  );
}
