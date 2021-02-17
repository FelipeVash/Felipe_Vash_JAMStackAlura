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
    justify-content: space-around;
    background-color: #ffffffE6;
    width:200px;
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
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px groove #ff0066;
    margin-bottom: 10px;
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
                { url: '/projeto1', name: 'Projeto1', src: imgUrl1 },
                { url: '/projeto2', name: 'Projeto2', src: imgUrl2 },
                { url: '/projeto3', name: 'Projeto3', src: imgUrl3 },
            ].map((link) => (
                <ProjetoWrapper>
                    <a key={link.url} href={link.url}>
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