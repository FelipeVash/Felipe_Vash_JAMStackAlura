import React from 'react';
import styled, { css } from 'styled-components';
import Capa from '../src/components/commons/Capa';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import { breakpointsMedia } from '../src/theme/utils/breakpointsMedia';
import { ProjetoWrapper } from '../src/components/commons/Projeto/styles/ProjetoWrapper';

const imgUrl = require("../public/images/fundo.jpg").default;
const fotoUrl = require("../public/images/foto.jpg").default;

const SiteWrapper = styled.div`
  align-items: center;
  background-image: url(${imgUrl});
  background-position: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction:column;
  justify-content:center;
  min-height: 100vh;
  width:100%;
`;

const ConteudoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 95vw;
`;

const Conteudo = styled.div`
    display:flex;
    align-items: center;
    flex-wrap:wrap;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    padding:0 20px 0 20px;
    background-color: #191919E6;
    width: 100%;
    min-height: 30vh;

    ${breakpointsMedia({
      sm: css`
      `,
      md: css`

      `,
      lg: css`
      `,
      xl: css`
      `,
      xxl: css`
      `,
      uhd: css`
      `,
    })}
    div{
        align-items:center;
        justify-content: center;
        overflow: hidden;
        max-width:1024px;
        max-height:1000px;
        border-radius:10px;
        margin:10px;
        &:hover,
        &:focus{
            cursor: default;
            opacity:1.0;
        }
        ${breakpointsMedia({
            sm: css`
            `,
            md: css`
                flex-direction:row;
                justify-content:center;
                align-items: center;
            `,
            lg: css`
            `,
            xl: css`
            `,
            xxl: css`
            `,
            uhd: css`
            `,
        })}
        img{
            width:15%;
            min-width:200px;
            height:15%;
            min-height:200px;
            border-radius: 50%;
            border: 8px groove #4dffff;
        }
        p{
            color: black;
            width:100%;
            height:100%;
            margin-left:auto;
            margin-right:auto;
            ${breakpointsMedia({
                sm: css`
                `,
                md: css`
                    padding-left:30px;
                    padding-right:30px;
                `,
                lg: css`
                `,
                xl: css`
                `,
                xxl: css`
                `,
                uhd: css`
                `,
            })}
        }
    }
`;

const SobreTexto = styled.p`
    color: white;
    font-size:1.5rem;
    font-weight:500;
    margin:20px;
    text-align: center;
    width:100%;
`;

export default function Sobre() {
  return (
    <SiteWrapper>
      <ConteudoWrapper>
        <Capa />
        <Menu />
        <Conteudo>
            <SobreTexto>Sobre Mim</SobreTexto>
            <ProjetoWrapper>
                    <img src={fotoUrl} alt='Foto do Felipe Vash'/>
                    <p>Com experiência em TI desde muito jovem, ganhador de bolsa de estudos integral, estudei WebDevelopment, Design Gráfico e Arquitetura de Rede ao longo dos anos e cresci em ambiente full tech, sempre pesquisando em todas as mídias.
                        Nasci na época do crescimento da internet e cresci na época da grande transição.
                        Tenho total experiência em todas as plataformas Windows, MacOS e Linux Ubuntu.
                        Apaixonado por tecnologia e como o futuro será construído a partir dela, busco sempre customizar minha configuração desde as especificações do hardware até o SO e aplicativos.
                        Movido pelo objetivo de acesso pleno e democrático a tecnologia, foco meus projetos tanto em desempenho, estética, responsividade quanto em acessibilidade para todas as pessoas.
                        Estudante ávido em busca constante de aperfeiçoamento e de novos conhecimentos e habilidades.
                    </p>
            </ProjetoWrapper>
        </Conteudo>
        <Footer />
      </ConteudoWrapper>
    </SiteWrapper>
  )
};
