import React from 'react';
import { Text } from '../../foundation/Text';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  return (
    <MenuWrapper as="ul">
        {[
          { url: '/', name: 'Home' },
          { url: '/sobre', name: 'Sobre Mim' },
          { url: 'https://www.linkedin.com/in/felipevash/', name: 'Linkedin' },
        ].map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
    </MenuWrapper>
  );
}