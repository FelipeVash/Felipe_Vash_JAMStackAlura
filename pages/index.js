import React from 'react';
import styled from 'styled-components';
import Capa from '../src/components/commons/Capa';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Conteudo from '../src/components/commons/Projetos';

const imgUrl = require("../public/images/fundo.jpg").default;

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
