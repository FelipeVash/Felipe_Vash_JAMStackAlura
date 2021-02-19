import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const CapaWrapper = styled.div`
  display:flex;
  align-items: center;
  background-image: url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 30px 30px 0 0;
  width: 100%;

  ${breakpointsMedia({
    sm: css`
    `,
    md: css`
    `,
    lg: css`
    `,
    xl: css`
      min-height:25%;
    `,
    xxl: css`
    `,
    uhd: css`
    `,
  })}
`;

export default CapaWrapper;