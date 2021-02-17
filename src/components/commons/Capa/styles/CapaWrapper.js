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
  min-height: 250px;

  ${breakpointsMedia({
    md: css`
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 1024px;
      min-height: 300px;
    `,
    lg: css`
      max-width: 1160px; 
      min-height: 350px;
    `,
    xl: css`
      max-width: 1820px;
    `,
  })}
`;

export default CapaWrapper;