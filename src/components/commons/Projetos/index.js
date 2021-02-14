import React from 'react';
import styled from 'styled-components';
import Projeto from '../Projeto/index.js';
import ProjetosWrapper from './styles/ProjetosWrapper.js';

const Title = styled.h2`
    font-size:2rem;
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-shadow: 3px 2px #000000;
    text-align: center;
    background-color: #595959;
    padding-top: 40px;
    padding-bottom: 10px;
    margin:0;
`;

export default function Projetos() {
    return (
        <>
            <Title>MEUS PROJETOS</Title>
            <ProjetosWrapper>
                <Projeto/>
                <Projeto/>
                <Projeto/>
            </ProjetosWrapper>
        </>
    )
};