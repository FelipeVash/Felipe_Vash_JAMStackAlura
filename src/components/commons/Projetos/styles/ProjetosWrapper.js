/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const ProjetosWrapper = styled.main`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: fit-content;
    max-height: 100%;
    padding:20px;
    margin:0;

    ${breakpointsMedia({
    xxL: css`
        height: 100%;
    `,
    uhd: css`
        justify-content: flex-start;
        `,
  })}
`;

export default ProjetosWrapper;
