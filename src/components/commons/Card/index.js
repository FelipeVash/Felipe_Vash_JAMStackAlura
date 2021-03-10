/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

export const Card = styled.article`
    align-items: center;
    background-color:  ${({ theme }) => theme.colors.card.primary.color};
    border-radius: 15px;
    box-shadow: 1px 1px 10px 5px ${({ theme }) => theme.colors.borders.secondary.boxShadow};
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin: 10px;
    padding: 15px;
    transition: .3s;
    width: 100%;
`;
