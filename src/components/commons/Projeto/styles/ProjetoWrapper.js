import React from 'react';
import styled, { css }from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';

const imgUrl1 = require("../../../../../public/images/projetoteste.jpg").default;
const imgUrl2 = require("../../../../../public/images/projetoteste2.png").default;
const imgUrl3 = require("../../../../../public/images/projetoteste3.jpg").default;

const ProjetoWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffffffE6;
    width:300px;
    height: 300px;
    margin: 10px 10px 20px 10px;
    border-radius: 5%;
    border: 2px groove #4dffff;
    box-shadow: 1px 1px 10px 5px black;
    a{
        display: flex;
        flex-direction: column;
        text-decoration: none;
        transition: 200ms ease-in-out;
        ${breakpointsMedia({
            xs: css`
        ${TextStyleVariants.smallestException}
        `,
        md: css`
        ${TextStyleVariants.paragraph1}
        `,
        })}
    }
`;

const ProjetoImage = styled.img`
    display:flex;
    align-self: center;
    width: 90%;
    height: 90%;
    margin-bottom: 20px;
    box-shadow: 1px 1px 10px 2px black;
`;

const ProjetoNome = styled.p`
    font-size:1.5rem;
    font-weight:500;
    color: #ff0066;
    text-align: center;
    padding: 0px 10px 0px 10px;
    margin:0;
`;



export default function ProjetoCard() {
    

    return (
        <>
            {[
                { url: 'https://instalura-base-mixqs2ce1.vercel.app', name: 'Instalura', src: imgUrl1 },
                { url: 'https://dbzquiz.felipevash.vercel.app/', name: 'DBZQuiz', src: imgUrl2 },
                { url: 'https://github.com/FelipeVash', name: 'Perfil GitHub', src: imgUrl3 },
            ].map((link) => (
                <ProjetoWrapper key={link.url}>
                    <a href={link.url}>
                        <ProjetoImage src={link.src} />
                        <ProjetoNome>
                            {link.name}
                        </ProjetoNome>
                    </a>
                </ProjetoWrapper>
            ))}
        </>
    )
}