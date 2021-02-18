import React from 'react';
import styled, { css }from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';

const imgUrl1 = require("../../../../../public/images/projetoteste.jpg").default;
const imgUrl2 = require("../../../../../public/images/projetoteste2.png").default;
const imgUrl3 = require("../../../../../public/images/projetoteste3.jpg").default;

export const ProjetoWrapper = styled.div`
    align-items: center;
    background-color: #ffffffE6;
    border: 2px groove #4dffff;
    border-radius: 5%;
    box-shadow: 1px 1px 10px 5px black;
    display:flex;
    flex-direction:column;
    margin:10px 10px 20px 10px;
    max-width:350px;
    min-width:280px;
    min-height:180px;
    max-height:350px;
    transition: .3s;
    padding:20px;
    width:100%;
    ${breakpointsMedia({
        sm: css`
            max-width:400px;
        `,
        md: css`
            max-width:600px;
        `,
        lg: css`
            max-width:280px;
        `,
        xl: css`
            max-width:350px;
        `,
        xxl: css`
            max-width:500px;
        `,
        uhd: css`
            max-width:550px;
        `,
        })}
    &:hover,
    &:focus {
        cursor:pointer;
        opacity: .7;
    }
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width:95%;
        text-decoration: none;
        transition: .3s;
        ${breakpointsMedia({
            xs: css`
        ${TextStyleVariants.smallestException}
        `,
        md: css`
        ${TextStyleVariants.paragraph1}
        `,
        })}
        &:hover,
        &:focus {
            cursor:pointer;
            width:100%;
        }
    }
`;

const ProjetoImage = styled.img`
    width:100%;
    max-width: 500px;
    margin:10px;
    box-shadow: 1px 1px 10px 2px black;
`;

const ProjetoNome = styled.p`
    color: #7a003c;
    font-size:1.5rem;
    font-weight:500;
    margin:5px;
    text-align: center;
    width:100%;
`;



export default function ProjetoCard() {
    return (
        <>
            {[
                { url: 'https://instalura-base-mixqs2ce1.vercel.app', name: 'Instalura', src: imgUrl1, alt: 'Foto do projeto Instalura' },
                { url: 'https://dbzquiz.felipevash.vercel.app/', name: 'DBZQuiz', src: imgUrl2, alt: 'Foto do projeto DBZ-Quiz' },
                { url: 'https://github.com/FelipeVash', name: 'Perfil GitHub', src: imgUrl3, alt: 'Foto do projeto do Perfil GitHub' },
            ].map((link) => (
                <ProjetoWrapper key={link.url}>
                    <a href={link.url}>
                        <ProjetoImage src={link.src} alt={link.alt}/>
                        <ProjetoNome>
                            {link.name}
                        </ProjetoNome>
                    </a>
                </ProjetoWrapper>
            ))}
        </>
    )
}