import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const ProjetosWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    padding:5px 10px 5px 10px;
    background-color: #191919E6;
    width: 100%;

    ${breakpointsMedia({
      xl: css`
        flex-direction: row;
      `,
    })}
`;

export default ProjetosWrapper;