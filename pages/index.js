import React from 'react';
import styled from 'styled-components';
import Capa from '../src/components/commons/Capa';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Conteudo from '../src/components/commons/Projetos';

const imgUrl = require("../public/images/fundo.jpg").default;

const SiteWrapper = styled.div`
  align-items:center;
  background-image: url(${imgUrl});
  background-position: cover;
  background-repeat: no-repeat;
  display:flex;
  justify-content:center;
  height: 100%;
  width:100vw;
  padding:1%;
`;

const ConteudoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default function Home() {
  return (
    <SiteWrapper>
      <ConteudoWrapper>
        <Capa />
        <Menu />
        <Conteudo />
        <Footer />
      </ConteudoWrapper>
    </SiteWrapper>
  )
};
