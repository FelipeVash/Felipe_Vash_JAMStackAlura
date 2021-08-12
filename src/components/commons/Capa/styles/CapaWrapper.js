/* eslint-disable linebreak-style */
import styled from 'styled-components';

const CapaWrapper = styled.header`
  align-items: center;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 2.5px groove;
  border-color: ${({ theme }) => theme.colors.borders.primary.color};
  border-radius: 15px 15px 15px 15px;
  display:flex;
  justify-content: center;
  min-height: fit-content;
  margin-bottom: 20px;
  max-height: 40%;
  width: 100%;
`;

export default CapaWrapper;
