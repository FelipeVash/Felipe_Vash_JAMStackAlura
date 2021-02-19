import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';

const imgUrl1 = require("../../../../public/images/projetoteste.jpg").default;
const imgUrl2 = require("../../../../public/images/projetoteste2.png").default;
const imgUrl3 = require("../../../../public/images/projetoteste3.jpg").default;

const ProjetoImage = styled.img`
    width:100%;
    margin:5px;
    box-shadow: 1px 1px 10px 2px black;
    border-radius: 15px;
`;

const ProjetoNome = styled.p`
    color: white;
    font-size:1.5rem;
    font-weight:500;
    margin:5px;
    text-align: center;
    width:100%;
    background-color:#0000009a;
    border-radius: 15px;
    border: 2px groove #4dffff;
    text-shadow: 2px 2px black;
    box-shadow: 1px 1px 10px 2px black;
`;

export default function ProjetoCard() {
    return (
        <>
            {[
                { url: 'https://instalura-base-mixqs2ce1.vercel.app', name: 'Instalura', src: imgUrl1, alt: 'Foto do projeto Instalura' },
                { url: 'https://dbzquiz.felipevash.vercel.app/', name: 'DBZQuiz', src: imgUrl2, alt: 'Foto do projeto DBZ-Quiz' },
                { url: 'https://github.com/FelipeVash', name: 'Perfil GitHub', src: imgUrl3, alt: 'Foto do projeto do Perfil GitHub' },
            ].map((link) => (
                <Card key={link.url}>
                    <a href={link.url}>
                        <ProjetoImage src={link.src} alt={link.alt}/>
                        <ProjetoNome>
                            {link.name}
                        </ProjetoNome>
                    </a>
                </Card>
            ))}
        </>
    )
}