import React from 'react';
import styled from 'styled-components';
import CapaWrapper from './styles/CapaWrapper';

const imgUrl = require("../../../../public/images/capa.jpg").default;

const Title = styled.h1`
  font-size:3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 5% 0 0 0;
  text-shadow: 3px 2px #000000;
  padding: 10px 10px 10px 10px;
`;

const SubTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 1% 0 5% 0;
  text-shadow: 3px 2px #000000;
  padding: 10px 10px 10px 10px;
`;

export default function Capa() {
  return (
    <CapaWrapper imgUrl={imgUrl}>
      <Title>Felipe Vash</Title>
      <SubTitle>Portfolio</SubTitle>
    </CapaWrapper>
  )
}
