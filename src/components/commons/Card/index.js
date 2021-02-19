import React from 'react';
import styled, { css }from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../foundation/Text';

export const Card = styled.div`
    align-items: center;
    background-color: #ffffffE6;
    border: 2px groove #4dffff;
    border-radius: 5%;
    box-shadow: 1px 1px 10px 5px black;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin: 10px;
    padding: 30px;
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
            min-height:350px;
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
        cursor:pointer;
        opacity: .7;
        border: 2px groove #ff0066;
    }
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width:100%;
        text-decoration: none;
        transition: .3s;
        ${breakpointsMedia({
        xs: css`
            ${TextStyleVariants.smallestException}
        `,
        sm: css`
        `,
        md: css`
            ${TextStyleVariants.paragraph1}
        `,
        lg: css`
        `,
        xl: css`
            width:100%;
        `,
        xxl: css`
        `,
        uhd: css`
        `,
        })}
        &:hover,
        &:focus {
            cursor:pointer;
            transform: scale(1.05);
            p{
                border: 2px groove #ff0066;
            }
        }
    }
`;
