import React from 'react';
import CapaWrapper from './styles/CapaWrapper';
import LogoWrapper from './styles/LogoWrapper';

const capaUrl = require("../../../../public/images/capa.jpg").default;
const logoUrl = require("../../../../public/images/logo.jpeg").default;

export default function Capa() {
  return (
    <CapaWrapper imgUrl={capaUrl}>
      <LogoWrapper>
        <img className="logo" src={logoUrl}/>
      </LogoWrapper>
    </CapaWrapper>
  )
}
