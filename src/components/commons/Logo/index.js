import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const logoUrl = require("../../../../public/images/logo.jpeg").default;

const LogoImagem = styled.img`
    display:flex;
    min-width: 150px;
    width:100%;
    align-self:center;
    border-radius: 50%;
    border: 8px groove #4dffff;
    ${breakpointsMedia({
        sm: css`
        `,
        md: css`
        `,
        lg: css`
        `,
        xl: css`
        `,
        xxl: css`
        `,
        uhd: css`
        `,
  })}
`;

export default function Logo() {
    return (
        <LogoImagem src={logoUrl} alt='Logotipo de Felipe Vash - WebCraft'/>
    )
};
