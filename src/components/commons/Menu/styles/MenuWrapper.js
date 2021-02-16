import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';

export const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 28px;
  padding-right: 28px;
  background-color: #000000;
  width:100%;
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


MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  padding: 12px;
  
  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-evenly;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 10px;
      padding-bottom: 10px;
    `,
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #FFFFFF;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #00ffff;
      
    }
  }
`;