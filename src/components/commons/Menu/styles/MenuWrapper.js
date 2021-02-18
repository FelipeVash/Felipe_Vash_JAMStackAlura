import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';

export const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
  flex-wrap: wrap;
  padding:10px 28px 10px 28px;
  background-color: #000000;
  margin:0;
  width:100%;
  border-bottom: 5px groove #4dffff;
  border-top: 5px groove #4dffff;
  ${breakpointsMedia({
    sm: css`
    `,
    md: css`
    `,
    lg: css`
    `,
    xl: css`
    `,
    xxl: css`
    `,
    uhd: css`
    `,
  })}
  a {
    text-align: center;
    display: flex;
    align-items:center;
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
    lg: css`
    `,
    xl: css`
    `,
    xxl: css`
    `,
    uhd: css`
      font-size:20px;
    `,
    })}
    &:hover,
    &:focus {
      color: #ff0066;
    }
  }
`;