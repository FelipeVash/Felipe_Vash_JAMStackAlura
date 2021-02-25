import React from 'react';
import styled, { css } from 'styled-components';
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