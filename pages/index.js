import React from 'react';
import styled from 'styled-components';
import Capa from '../src/components/commons/Capa';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Conteudo from '../src/components/commons/Projetos';
import Sobre from '../src/components/commons/Sobre'
import { Text } from '../src/components/foundation/Text';
import { ProjetosWrapper } from '../src/components/commons/Projetos/styles/ProjetosWrapper';

const imgUrl = require("../public/images/fundo.jpg").default;

const SiteFundo = styled.div`
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

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default function Home() {
  const [conteudo, setConteudo] = React.useState('home');
  return (
    <SiteFundo>
      <SiteWrapper>
        <Capa />
        <Menu>
          {[
            { name: 'Home', modo: 'home'},
            { name: 'Sobre Mim', modo: 'sobre' },
            { url: 'https://www.linkedin.com/in/felipevash/', name: 'Linkedin' },
          ].map((link) => (
            <li key={link.name}>
              <Text variant="smallestException" tag="a" href={link.url} onClick={() => {setConteudo(link.modo)}}>
                {link.name}
              </Text>
            </li>
          ))}
        </Menu>
        {conteudo === 'home' && <Conteudo />}
        {conteudo === 'sobre' && 
          <ProjetosWrapper>
            <Sobre />
          </ProjetosWrapper>
        }
        <Footer />
      </SiteWrapper>
    </SiteFundo>
  )
};
