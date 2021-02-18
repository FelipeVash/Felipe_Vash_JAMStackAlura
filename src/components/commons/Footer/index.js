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
  width: 100%;
  border-radius: 0px 0px 30px 30px;
  a {
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
  ${breakpointsMedia({
    md: css`
    `,
    lg: css`
    `,
    xl: css`
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
            alt='Logotipo de Felipe Vash - WebCraft com link para o GitHub'
        />
      </a>
    </FooterWrapper>
  );
}