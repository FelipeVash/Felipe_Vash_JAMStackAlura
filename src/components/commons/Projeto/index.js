import React from 'react';
import styled from 'styled-components';
import ProjetoWrapper from './styles/ProjetoWrapper';
import Image from 'next/image';

const imgUrl = require("../../../../public/images/projetoteste.png").default;

const ProjetoNome = styled.p`
    font-size:1.5rem;
    color: ${({ theme }) => theme.colors.secondary.main.color};
    text-align: center;
    padding: 0px 10px 0px 10px;
    margin:0;
`;

export default function Projeto() {
    return (
        <ProjetoWrapper>
            <a  href="/projeto_teste">
                <Image
                    src={imgUrl}
                    width='125%'
                    height='175%'
                />
                <ProjetoNome>Projeto Report</ProjetoNome>
            </a>
        </ProjetoWrapper>
    )  
}