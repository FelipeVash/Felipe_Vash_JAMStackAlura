import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const CapaWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 30px 30px 0 0;
  width: 100%;
  min-height: 25vh;
  justify-content: center;

  ${breakpointsMedia({
    sm: css`
    `,
    md: css`
    `,
    lg: css`
      min-height: 30vh;
    `,
    xl: css`
    `,
    xxl: css`
      min-height: 35vh;
    `,
    uhd: css`
    `,
  })}
`;

export default CapaWrapper;