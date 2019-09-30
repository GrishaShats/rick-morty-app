import React from 'react';
import { OptionProps } from 'react-select/src/components/Option';
import { styled } from 'theme';

interface OptionWrapperProps {
  isFocused: boolean;
}

const OptionWrapper = styled.div<OptionWrapperProps>`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: ${({ isFocused }) => isFocused ? 'black' : ''};

  svg {
    cursor: pointer;
  }

  p {
    padding-left: 10px;
    font-weight: 500;
  }
`;

interface MultiSelectOptionProps<T> extends OptionProps<T> {
  modifySelectOption?: (props: OptionProps<T>) => void;
}

const MultiSelectOption = <T extends {}>(props: MultiSelectOptionProps<T>) => {
  const {
    children,
    isFocused,
    innerProps: {
      onMouseOver,
    },
  } = props;

  return (
    <OptionWrapper isFocused={isFocused} onMouseOver={onMouseOver}>
      <p>{children}</p>
    </OptionWrapper>
  );
};

export default MultiSelectOption;
