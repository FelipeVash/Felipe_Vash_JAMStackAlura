import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

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
  ${breakpointsMedia({
    md: css`
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 1024px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
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