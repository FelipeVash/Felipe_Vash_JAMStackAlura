import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const CapaWrapper = styled.header`
  display:flex;
  align-items: center;
  background-image: url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 15px 15px 0 0;
  justify-content: center;
  width: 100%;
  height:100%;

  ${breakpointsMedia({
    sm: css`
    `,
    md: css`
    `,
    lg: css`
    `,
    xl: css`
      min-height:250px;
    `,
    xxl: css`
    `,
    uhd: css`
    `,
  })}
`;

export default CapaWrapper;