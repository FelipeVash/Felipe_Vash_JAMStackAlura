import React from 'react';
import styled from 'styled-components';
import Capa from '../src/components/commons/Capa';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Projetos from '../src/components/commons/Projetos';

const imgUrl = require("../public/images/fundo.jpg").default;

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-image: url(${imgUrl});
  background-position: fill;
`;

const ConteudoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 90%;
`;

export default function Home() {
  return (
    <SiteWrapper>
      <ConteudoWrapper>
        <Capa />
        <Menu />
        <Projetos />
        <Footer />
      </ConteudoWrapper>
    </SiteWrapper>
  )
};
