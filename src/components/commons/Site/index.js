/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

export const Site = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.tertiary.color};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height:100%;
  transition: .3s;
`;
