import React from 'react';
import CapaWrapper from './styles/CapaWrapper';
import Logo from '../Logo';

const capaUrl = require(`../../../../public/images/capa.jpg`).default;

export default function Capa() {
  return (
    <CapaWrapper imgUrl={capaUrl}>
      <Logo />
    </CapaWrapper>
  )
}
