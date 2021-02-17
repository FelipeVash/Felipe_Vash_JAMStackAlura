import React from 'react';
import styled from 'styled-components';
import LogoWrapper from './styles/LogoWrapper';

const logoUrl = require("../../../../public/images/logo.jpeg").default;

const LogoImagem = styled.img`
    min-width: 150px;
    width: 12%;
    align-self:center;
    border-radius: 50%;
    border: 8px groove #4dffff;
    margin-right: 15px;
    margin-top: 15px;
`;

export default function Logo() {
    return (
        <LogoWrapper>
            <LogoImagem src={logoUrl}/>
        </LogoWrapper>
    )
};
