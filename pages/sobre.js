import React from 'react';
import Link from 'next/link';
import { Site } from '../src/components/commons/Site';
import Capa from '../src/components/commons/Capa';
import Menu from '../src/components/commons/Menu';
import Sobre from '../src/components/commons/Sobre'
import Footer from '../src/components/commons/Footer';

export default function SobreSite() {
  return (
    <Site>
      <Capa />
      <Menu>
        {[
          { url: '/', name: 'Home'},
          { url: '/sobre', name: 'Sobre Mim'},
          { url: 'https://www.linkedin.com/in/felipevash/', name: 'Linkedin'},
        ].map((link) => (
          <li key={link.name}>
            <Link href={link.url} replace>
              {link.name}
            </Link>
          </li>
        ))}
      </Menu>
      <Sobre />
      <Footer />
    </Site>
  )
};
