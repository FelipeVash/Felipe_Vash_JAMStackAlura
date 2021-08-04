/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const CapaWrapper = styled.header`
  align-items: center;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 15px 15px 0 0;
  display:flex;
  justify-content: center;
  min-height: fit-content;
  max-height: 40%;
  width: 100%;
`;

export default CapaWrapper;
