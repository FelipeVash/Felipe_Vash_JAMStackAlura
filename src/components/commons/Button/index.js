/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariants } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  background-color: ${({ theme }) => theme.colors.button.tertiary.color};
  border: 3px groove;
  border-color: ${({ theme }) => theme.colors.button.tertiary.borderColor};
  color: ${({ theme }) => theme.colors.button.tertiary.contrastText};
`;

const ButtonDefault = css`
  background-color: ${({ theme, variant }) => get(theme, `colors.button.${variant}.color`)};
  border: 3px groove;
  border-color: ${({ theme, variant }) => get(theme, `colors.borders.${variant}.color`)};
  color: ${({ theme, variant }) => get(theme, `colors.button.${variant}.contrastText`)};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.button.secondary.color};
    border-color: ${({ theme }) => theme.colors.button.secondary.color};
    color: ${({ theme }) => theme.colors.button.secondary.contrastText};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  transition: 0.3s;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
      font-weight: 500;
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .7;
  }
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${({ disabled }) => (disabled ? ButtonGhost : ButtonDefault)}
`;
