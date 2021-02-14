import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const imgUrl = require("../../../../public/images/logo.jpeg").default;

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#000000;
  a {
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://github.com/FelipeVash/">
        <Image 
            src={imgUrl}
            width={150}
            height={150}
        />
      </a>
    </FooterWrapper>
  );
}