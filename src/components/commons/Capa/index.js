import React from 'react';
import CapaWrapper from './styles/CapaWrapper';
import LogoWrapper from './styles/LogoWrapper';

const logoUrl = require("../../../../public/images/logo.jpeg").default;
const capaUrl = require(`../../../../public/images/capaDark.jpg`).default;

export default function Capa() {
  return (
    <CapaWrapper imgUrl={capaUrl}>
      <LogoWrapper>
        <img className="logo" src={logoUrl}/>
      </LogoWrapper>
    </CapaWrapper>
  )
}
