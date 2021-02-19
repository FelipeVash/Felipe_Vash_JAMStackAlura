import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import LogoWrapper from './styles/LogoWrapper';

const logoUrl = require("../../../../public/images/logo.jpeg").default;

const LogoImagem = styled.img`
    min-width: 150px;
    width: 10%;
    margin:15px;
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
            width:12%;
        `,
        xxl: css`
        `,
        uhd: css`
        `,
  })}
`;

export default function Logo() {
    return (
        <LogoWrapper>
            <LogoImagem src={logoUrl} alt='Logotipo de Felipe Vash - WebCraft'/>
        </LogoWrapper>
    )
};
