/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const getSizeStyles = (size) => {
    if (size === "large") {
        return {
            "border-radius": "8px",
            "height": "16px",
            "padding": "2px"
        }
    } else if (size === "medium") {
        return {
            "border-radius": "4px",
            "height": "12px"
        }
    } else if (size === "small") {
        return {
            "border-radius": "4px",
            "height": "8px"
        }
    }
    return {};
}
const ProgressBar = ({value, size}) => {
    return <Wrapper
        size={size}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100">
        <Inner value={value}>
            <VisuallyHidden>{value} %</VisuallyHidden>
        </Inner>
    </Wrapper>;
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  ${p => ({...getSizeStyles(p.size)})
  }
`

const Inner = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value}%;
  height: 100%;
  border-radius: inherit;
  border-top-right-radius: ${p => p.value > 99 ? "inherit" : 0};
  border-bottom-right-radius: ${p => p.value > 99 ? "inherit" : 0};
`

export default ProgressBar;
