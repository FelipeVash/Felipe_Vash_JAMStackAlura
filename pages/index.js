import React from 'react';
import { Site } from '../src/components/commons/Site';
import Capa from '../src/components/commons/Capa';
import Menu from '../src/components/commons/Menu';
import { Text } from '../src/components/foundation/Text';
import Conteudo from '../src/components/commons/Projetos';
import Sobre from '../src/components/commons/Sobre';
import Footer from '../src/components/commons/Footer';

export default function Home() {
  const [conteudo, setConteudo] = React.useState('home');
  return (
    <Site>
      <Capa />
      <Menu>
        {[
          { name: 'Home', modo: 'home'},
          { name: 'Sobre Mim', modo: 'sobre' },
          { url: 'https://www.linkedin.com/in/felipevash/', name: 'Linkedin', modo: 'link' },
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
      {conteudo === 'link' && <Sobre />}
      <Footer />
    </Site>
  )
}
