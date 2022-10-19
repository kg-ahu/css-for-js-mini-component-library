import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>

      <Dropdown value={value} onChange={onChange}>
        {children}
      </Dropdown>

      <Display>
        {displayedValue}

        <IconWrapper>
          <Icon id="chevron-down" size="24" strokeWidth={1} />
        </IconWrapper>
      </Display>
    </Wrapper>
  );
};

const Dropdown = styled.select`
  bottom: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  top: 0;
  right: 0;
`;

const Display = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: 1rem;
  padding: 12px 16px;
  padding-right: 52px;


  ${Dropdown}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${Dropdown}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  z-index: -1;
`;

const Wrapper = styled.div`
  isolation: isolate;
  position: relative;
  width: max-content;
`;

export default Select;
