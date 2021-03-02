/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../foundation/Text';
import { propToStyle } from '../../../theme/utils/propToStyle';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  resize: none;
  ${propToStyle('height')}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
  height: 'inherit',
};
export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  tag,
  height,
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        tag={tag}
        height={height}
      />
    </InputWrapper>
  );
}

TextField.defaultProps = {
  height: 'inherit',
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  height: PropTypes.string,
};
