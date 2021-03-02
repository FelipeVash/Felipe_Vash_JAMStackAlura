/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const SobreWrapper = styled.main`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding:20px;
    margin:0;
    ${breakpointsMedia({
    sm: css`
                max-width:none;
            `,
    md: css`
                max-width:none;
            `,
    lg: css`
                max-width:none;
            `,
    xl: css`
                max-width:none;
            `,
    xxl: css`
                max-width:none;
            `,
    uhd: css`
                max-width:none;
            `,
  })}
    article{
        align-items: center;
        border-radius: 15px;
        margin: 10px;
        padding: 15px;
        width: 100%;
        ${breakpointsMedia({
    sm: css`
                max-width:none;
            `,
    md: css`
                max-width:none;
            `,
    lg: css`
                max-width:none;
            `,
    xl: css`
                flex-direction:row;
                flex-wrap: wrap;
                max-width:950px;
                min-height:250px;
            `,
    xxl: css`
                max-width:950px;
                min-height:333.88px;
            `,
    uhd: css`
                max-width:950px;
            `,
  })}
    &:hover,
    &:focus {
        box-shadow: 1px 1px 10px 5px black;
        cursor: default;
        transform: none;
    }
        p{  
            text-align: center;
            width: 80%;
            margin-top: 20px;
            margin-left:0;
            margin-right:0;
        }
        img:first-child{
            width:10%;
            min-width:150px;
            min-height:150px;
            border-radius: 50%;
            border: 8px groove #4dffff;
        }
        img{
            all:initial;
            width:100%;
            max-width:150px;
        }
    }
`;
