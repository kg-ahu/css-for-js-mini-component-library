/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: '8px',
  },
  medium: {
    height: '12px',
  },
  large: {
    borderRadius: '8px',
    height: '16px',
    padding: '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Track role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={STYLES[size]}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressIndicator value={value}></ProgressIndicator>
    </Track>
  );
};

const Track = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
  width: 100%;
`;

const ProgressIndicator = styled.div`
  border-radius: inherit;
  height: 100%;
  overflow: hidden;
  width: 100%;

  &::before {
    background-color: ${COLORS.primary};
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.value + '%'};
  }
`;

export default ProgressBar;
