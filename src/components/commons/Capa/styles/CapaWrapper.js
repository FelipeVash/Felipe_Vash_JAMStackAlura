import React from 'react';
import styled from 'styled-components';

export const CapaWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export default CapaWrapper;