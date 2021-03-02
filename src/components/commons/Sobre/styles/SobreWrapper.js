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
    p{  
      text-align: center;
      width: 80%;
      margin-top: 20px;
      margin-left:0;
      margin-right:0;
    }
`;
