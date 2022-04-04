/* eslint-disable linebreak-style */
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const logoUrl = require('../../../../public/images/logo.jpg').default;

const LogoImagem = styled(Image)`
    min-width: 150px;
    border-radius: 50%;
`;

export default function Logo() {
  return (
    <LogoImagem src={logoUrl} alt="Logotipo de Felipe Vash - WebCraft" width={500} height={500} />
  );
}
