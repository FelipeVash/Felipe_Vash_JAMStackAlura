/* eslint-disable linebreak-style */
import React from 'react';
import styled, { css } from 'styled-components';
import { Card } from '../Card';
import { TextStyleVariants } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const imgUrl1 = require('../../../../public/images/projetoteste.jpg').default;
const imgUrl2 = require('../../../../public/images/projetoteste2.jpg').default;
const imgUrl3 = require('../../../../public/images/projetoteste3.jpg').default;

const ProjetoImage = styled.img`
    width:100%;
    margin:5px;
    box-shadow: 1px 1px 10px 2px black;
    border-radius: 15px;
`;

const ProjetoNome = styled.p`
    color: white;
    font-size:1.5rem;
    font-weight:500;
    margin:5px;
    text-align: center;
    width:100%;
    border-radius: 15px;
    text-shadow: 2px 1px black;
`;

const CardWrapper = styled.section`
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`;

const CardProjeto = styled(Card)`
   ${breakpointsMedia({
    sm: css`
            max-width:450px;
        `,
    md: css`
            max-width:600px;
        `,
    lg: css`
            max-width:600px;
            min-height:200px;
        `,
    xl: css`
            max-width:350px;
            min-height:200px;
        `,
    xxl: css`
            max-width:500px;
        `,
    uhd: css`
            max-width:550px;
        `,
  })}
  a{
    align-items: center;
    display: flex;
    background-color: ${({ theme }) => theme.colors.card.secondary.color};
    border: 3px groove;
    border-color: ${({ theme }) => theme.colors.borders.primary.color};
    border-radius:15px;
    box-shadow: 1px 1px 10px 2px black;
    flex-direction: column;
    justify-content: space-evenly;
    padding:5px;
    text-decoration: none;
    transition: .3s;
    width:100%;
    backdrop-filter: blur(50px);
    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariants.smallestException}
      `,
    md: css`
        ${TextStyleVariants.paragraph1}
      `,
    xl: css`
        width:100%;
      `,
  })}
  }
  &:hover,
  &:focus {
    box-shadow: 1.05px 1.05px 10px 5px #000002;
    cursor:pointer;
    transform: scale(1.05);
    a{
        cursor:pointer;
        border-color: ${({ theme }) => theme.colors.borders.secondary.color};
    }
  }
`;

export default function Projeto() {
  return (
    <CardWrapper>
      {[
        {
          url: 'https://instafolio.vercel.app/', name: 'INSTALURA', src: imgUrl1, alt: 'Foto do projeto Instalura',
        },
        {
          url: 'https://dbzquiz.vercel.app/', name: 'DBZ - QUIZ', src: imgUrl2, alt: 'Foto do projeto DBZ-Quiz',
        },
        {
          url: 'https://github.com/FelipeVash', name: 'PERFIL GITHUB', src: imgUrl3, alt: 'Foto do projeto do Perfil GitHub',
        },
      ].map((link) => (
        <CardProjeto key={link.url}>
          <a href={link.url}>
            <ProjetoImage src={link.src} alt={link.alt} />
            <ProjetoNome>
              {link.name}
            </ProjetoNome>
          </a>
        </CardProjeto>
      ))}
    </CardWrapper>
  );
}
