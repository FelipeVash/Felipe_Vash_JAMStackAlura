import React from 'react';
import styled, { css }from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../foundation/Text';

export const Card = styled.div`
    align-items: center;
    background-color: #ffffffE6;
    border-radius: 5%;
    box-shadow: 1px 1px 10px 5px black;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin: 10px;
    padding: 15px;
    transition: .3s;
    width: 100%;
    ${breakpointsMedia({
        sm: css`
            max-width:450px;
        `,
        md: css`
            max-width:600px;
        `,
        lg: css`
            max-width:600px;
            min-height:200px;
        `,
        xl: css`
            max-width:350px;
            min-height:200px;
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
        box-shadow: 1px 1px 10px 10px black;
        cursor:pointer;
        transform: scale(1.05);
        a{
            cursor:pointer;
            border: 3px groove #ff0066;
        }
    }
    a{
        align-items: center;
        display: flex;
        background-color:#000000CC;
        border: 3px groove #4dffff;
        border-radius:15px;
        box-shadow: 1px 1px 10px 2px black;
        flex-direction: column;
        justify-content: space-evenly;
        padding:5px;
        text-decoration: none;
        transition: .3s;
        width:100%;
        ${breakpointsMedia({
        xs: css`
            ${TextStyleVariants.smallestException}
        `,
        md: css`
            ${TextStyleVariants.paragraph1}
        `,
        xl: css`
            width:100%;
        `,
        })}
    }
`;
