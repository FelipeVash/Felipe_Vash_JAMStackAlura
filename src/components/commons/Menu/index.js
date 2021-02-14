import React from 'react';
import { Text } from '../../foundation/Text';
import { MenuWrapper } from './styles/MenuWrapper';
import Image from 'next/image'

const imgUrl = require("../../../../public/images/logo.jpeg").default;

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.CentralSide as="ul"> {/* MenuWrapper.CentralSide */}
        {[
          { url: '/', name: 'Home' },
          { url: '/projetos', name: 'Projetos' },
          { url: '/sobre', name: 'Sobre Mim' },
        ].map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
    </MenuWrapper>
  );
}