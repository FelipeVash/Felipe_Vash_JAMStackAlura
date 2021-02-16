import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CapaWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top:35px;
  border-radius: 30px 30px 0 0;
  width: 100%;

  ${breakpointsMedia({
    md: css`
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 1024px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1820px;
    `,
  })}
`;

export default CapaWrapper;