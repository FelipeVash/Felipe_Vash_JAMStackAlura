import React from 'react';
import { Text } from '../../foundation/Text';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu({ children }) {
  return (
    <MenuWrapper as="ul">
      {children}
    </MenuWrapper>
  );
}