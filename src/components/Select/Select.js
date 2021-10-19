import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <NativeSelect value={value} onChange={onChange}>
                {children}
            </NativeSelect>
            <CustomSelect>
                {displayedValue}
                <IconWrapper><Icon id="chevron-down" size={24} strokeWidth={1}/></IconWrapper>
            </CustomSelect>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none;
`

const CustomSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  ${NativeSelect}:focus + & {
    outline: 1px black dotted;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  width: 24px;
  height: 24px;
  margin: auto;
  pointer-events: none;
`

export default Select;
