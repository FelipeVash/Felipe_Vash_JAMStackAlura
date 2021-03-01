/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { MenuWrapper, MenuList } from './styles/MenuWrapper';

export default function Menu({ children }) {
  return (
    <MenuWrapper>
      <MenuList>
        {children}
      </MenuList>
    </MenuWrapper>
  );
}
