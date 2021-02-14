import React from 'react';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';
import ProjetosWrapper from './styles/ProjetosWrapper.js';

const Title = styled.h2`
    font-size:2rem;
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-shadow: 3px 2px #000000;
    padding: 10px 10px 10px 10px;
`;

export default function Projetos() {
    return (
        <ProjetosWrapper>
            <Title>MEUS PROJETOS</Title>
        </ProjetosWrapper>
    )
};