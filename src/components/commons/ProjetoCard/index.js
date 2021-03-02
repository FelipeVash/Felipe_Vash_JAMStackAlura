/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';

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

export default function ProjetoCard() {
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
        <Card key={link.url}>
          <a href={link.url}>
            <ProjetoImage src={link.src} alt={link.alt} />
            <ProjetoNome>
              {link.name}
            </ProjetoNome>
          </a>
        </Card>
      ))}
    </CardWrapper>
  );
}
