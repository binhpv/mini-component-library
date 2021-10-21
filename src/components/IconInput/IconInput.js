import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
        fontSize: 14/16,
        iconSize: 16,
        borderThickness: 1,
        height: 24/16
    },
    large: {
        fontSize: 18/16,
        iconSize: 24,
        borderThickness: 2,
        height: 36/16
    }
};
const IconInput = ({
                       label,
                       icon,
                       width = 250,
                       size,
                       ...rest
                   }) => {
    const styles = STYLES[size];

    return <Wrapper style={{

    }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper style={{"--size": styles.iconSize + "px"}}><Icon id={icon} size={styles.iconSize}/></IconWrapper>
        <TextInput {...rest} style={{
            "--width": width + "px",
            "--height": styles.height + "rem",
            "--borderThickness": styles.borderThickness + "px",
            "--fontSize": styles.fontSize + "rem"
        }}/>
    </Wrapper>;
};
const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  height: var(--size);
`

const TextInput = styled.input`
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  width: var(--width);
  height: var(--height);
  font-size: var(--fontSize);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`
export default IconInput;
