import React from 'react';
import { Site } from '../src/components/commons/Site';
import Capa from '../src/components/commons/Capa';
import Menu from '../src/components/commons/Menu';
import Conteudo from '../src/components/commons/Projetos';
import Footer from '../src/components/commons/Footer';

export default function Home() {
  const [conteudo, setConteudo] = React.useState('home');
  return (
    <Site>
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
        {conteudo === 'sobre' && <Sobre />}
        <Footer />
      </SiteWrapper>
    </Site>
  )
};
