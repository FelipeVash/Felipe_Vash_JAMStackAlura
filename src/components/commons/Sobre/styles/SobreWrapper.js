/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const SobreWrapper = styled.main`
    background-image: ${({ theme }) => theme.colors.background.secondary.color};
    backdrop-filter: blur(5px);
    border: 2.5px groove;
    border-color: ${({ theme }) => theme.colors.borders.primary.color};
    border-radius: 15px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    max-height: 100%;
    min-height: fit-content;
    padding:10px;
    width: 100%;

    ${breakpointsMedia({
    xxL: css`
        height: 100%;
    `,
    uhd: css`
        justify-content: flex-start;
        `,
  })}
    p{  
      text-align: center;
      width: 80%;
      margin-top: 20px;
      margin-left:0;
      margin-right:0;
    }
`;
