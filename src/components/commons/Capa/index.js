import React from 'react';
import styled from 'styled-components';
import CapaWrapper from './styles/CapaWrapper';
import Logo from '../Logo';

const capaUrl = require(`../../../../public/images/capa.jpg`).default;

const LogoWrapper = styled.figure`
  display: flex;
  width: 12%;
  min-width: 150px;
  justify-content: center;
  align-items: center;
  padding:10px;
`;

export default function Capa() {
  return (
    <CapaWrapper imgUrl={capaUrl}>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </CapaWrapper>
  )
}
