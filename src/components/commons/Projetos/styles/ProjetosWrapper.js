import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const ProjetosWrapper = styled.div`
    display:flex;
    align-items: center;
    flex-wrap:wrap;
    justify-content: space-evenly;
    padding: 10px 0px 10px 0px;
    margin-left: auto;
    margin-right: auto;
    background-color: #292929;
    width: 100%;

    ${breakpointsMedia({
    md: css`
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-width: 1024px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1920px;
    `,
  })}
`;

export default ProjetosWrapper;