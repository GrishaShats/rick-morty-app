import React from 'react';

import { styled } from 'theme';

import { withFormField } from 'components/Form';

import { sharedInputCss } from './sharedInputCss';

export interface InvalidProp {
  invalid?: boolean;
  isNumberField?: boolean;
}

export interface InputCommonProps
  extends InvalidProp,
  React.InputHTMLAttributes<HTMLInputElement> { }

export const DefaultInput = styled.input<InputCommonProps>`
  ${sharedInputCss};

  ${({ isNumberField, theme }) =>
    isNumberField &&
    `
    border: none;
    padding: 0;

    ::placeholder {
      color: ${theme.blackColor};
    }

    :disabled {
      opacity: 1;
    }
  `}
`;

export const InputField = withFormField(DefaultInput as any);
