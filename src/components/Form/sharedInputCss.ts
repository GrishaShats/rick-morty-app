import { css } from 'theme';

import { InvalidProp } from './Input';

export const sharedInputCss = css<InvalidProp>`
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  height: 38px;
  padding: 10px;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  color: ${({ theme }) => theme.blackColor};
  border-radius: 2px;
  border: solid 1px ${({ theme, invalid }) => invalid ? theme.redColor : theme.grayColor};

  &:focus{
    border: solid 1px ${({ theme, invalid }) => invalid ? theme.redColor : theme.blackColor};
  }

  ::placeholder {
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.grayColor};
  }

  :disabled {
    background-color: ${({ theme }) => theme.whiteColor};
    opacity: 0.5;
  }
`;
