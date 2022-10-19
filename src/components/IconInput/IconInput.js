import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    borderWidth: '1px',
    fontSize: (16 / 16) + 'rem',
    padding: '4px',
    paddingLeft: (24 / 16) + 'rem',
  },
  large: {
    borderWidth: '2px',
    fontSize: (24 / 16) + 'rem',
    padding: '6px',
    paddingLeft: (36 / 16) + 'rem',
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const iconSize = size === 'large' ? 24 : 16;

  return (
    <Wrapper style={{ '--width': width + 'px' }}>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>

      <Input type="text" placeholder={placeholder} size={size} style={STYLES[size]} />

      <IconWrapper style={{ '--size': iconSize / 16 + 'rem' }}>
        <Icon id={icon} size={iconSize} strokeWidth={1} />
      </IconWrapper>
    </Wrapper>
  );
};

const Input = styled.input`
  border: none;
  border-bottom: solid ${COLORS.black};
  display: inline;
  color: inherit;
  font-weight: 700;
  width: 100%;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  bottom: 0;
  height: var(--size);
  left: 0;
  margin: auto;
  position: absolute;
  top: 0;
  width: var(--size);
`;

const Wrapper = styled.label`
  color: ${COLORS.gray700};
  display: block;
  position: relative;
  width: var(--width);

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
