import React from 'react';
import styled from 'styled-components';
import Capa from '../src/components/commons/Capa';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Sobre from '../src/components/commons/Sobre';

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

const Conteudo = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    padding:0 20px 0 20px;
    background-color: #191919E6;
    width: 100%;
`;
    
export default function SobrePage() {
  return (
    <SiteWrapper>
      <ConteudoWrapper>
        <Capa />
        <Menu />
        <Conteudo>
          <Sobre />
        </Conteudo>
        <Footer />
      </ConteudoWrapper>
    </SiteWrapper>
  )
};
