/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

const logoUrl = require('../../../../public/images/logo.jpg').default;

const LogoImagem = styled.img`
    display:flex;
    min-width: 150px;
    width:100%;
    align-self:center;
    border-radius: 50%;
    border: 8px groove #4dffff;
`;

export default function Logo() {
  return (
    <LogoImagem src={logoUrl} alt="Logotipo de Felipe Vash - WebCraft" />
  );
}
