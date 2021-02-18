import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const ProjetosWrapper = styled.div`
    display:flex;
    align-items: center;
    flex-wrap:wrap;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    padding:0 20px 0 20px;
    background-color: #191919E6;
    width: 100%;
    min-height: 30vh;

    ${breakpointsMedia({
      sm: css`
      `,
      md: css`

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
`;

export default ProjetosWrapper;