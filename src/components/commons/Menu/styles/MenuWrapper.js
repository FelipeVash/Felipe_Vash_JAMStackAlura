/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MenuList = styled.ul`
  align-items: center;
  background-image: ${({ theme }) => theme.colors.background.secondary.color};
  backdrop-filter: blur(5px);
  border: 2.5px groove;
  border-color: ${({ theme }) => theme.colors.borders.primary.color};
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  justify-content: space-evenly;
  list-style-type: none;
  padding:10px 28px 10px 28px;
  margin:0;
  width:100%;
  li button {
    text-align: center;
    text-shadow: 2px 2px #000000;
    display: flex;
    align-items:center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main.color};
    transition: 200ms ease-in-out;
    background-color: transparent;
    border: none;
    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
    uhd: css`
      font-size:20px;
    `,
  })}
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.tertiary.main.color};
      transform: scale(1.05);
    }
    &:active,
    &:target,
    &::selection {
      border: none;
      background: none;
    }
  }
`;
