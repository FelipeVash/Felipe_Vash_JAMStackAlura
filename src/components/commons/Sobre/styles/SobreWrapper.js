import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';


export const SobreWrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    div{
        align-items:center;
        justify-content: center;
        overflow: hidden;
        max-width:1024px;
        max-height:1000px;
        border-radius:10px;
        margin:10px;
        &:hover,
        &:focus{
            cursor: default;
            opacity:1.0;
        }
        ${breakpointsMedia({
            sm: css`
            `,
            md: css`
                flex-direction:row;
                justify-content:center;
                align-items: center;
            `,
            lg: css`
            `,
            xl: css`
            `,
            xxl: css`
            `,
            uhd: css`
            `,
        })}
        img{
            width:15%;
            min-width:150px;
            height:15%;
            min-height:150px;
            border-radius: 50%;
            border: 8px groove #4dffff;
        }
        p{
            color: black;
            width:100%;
            height:100%;
            margin-left:auto;
            margin-right:auto;
            text-align:center;
            ${breakpointsMedia({
                sm: css`
                `,
                md: css`
                    padding-left:30px;
                    padding-right:30px;
                `,
                lg: css`
                `,
                xl: css`
                `,
                xxl: css`
                `,
                uhd: css`
                `,
            })}
        }
    }
`;


