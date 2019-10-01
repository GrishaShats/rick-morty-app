import { Props } from 'react-select/src/Select';
import { StylesConfig } from 'react-select/src/styles';

import { theme } from 'theme';
import { RefreshControlComponent } from 'react-native';

export interface CustomSelectProps extends Props {
  isCustomSingleValue?: boolean;
  invalid?: boolean;
}

export interface SelectState {
  isFocused: boolean;
  isDisabled: boolean;
  selectProps: CustomSelectProps;
}

export const customStyles: StylesConfig = {
  dropdownIndicator: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    cursor: 'pointer',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  placeholder: (provided: React.CSSProperties) => ({
    ...provided,
    color: theme.blackColor,
    fontSize: '14px',
    lineHeight: '17px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }),
  menuList: (provided: React.CSSProperties) => ({
    ...provided,
    padding: 0,
    fontSize: '14px',
    lineHeight: '17px',
    borderRadius: '0 0 2px 2px',
  }),
  menu: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    marginTop: 0,
    boxShadow: 'none',
    borderRadius: '0 0 2px 2px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: state.selectProps.invalid ? theme.redColor : theme.blackColor,
    borderTop: '0',
  }),
  control: (provided: React.CSSProperties, state: SelectState) => {
    const {
      isFocused,
      isDisabled,
      selectProps: {
        invalid,
        menuIsOpen,
      },
    } = state;

    return ({
      ...provided,
      opacity: isDisabled ? 0.5 : 1,
      borderRadius: menuIsOpen ? '2px 2px 0 0' : '2px',
      borderColor: invalid ?
        theme.redColor
        :
        (isFocused || menuIsOpen) ?
          theme.blackColor
          :
          theme.blackColor,
      backgroundColor: theme.whiteColor,
      boxShadow: 'none',
      ['&:hover']: {
        borderColor: '0',
      },
    });
  },
  singleValue: (provided: React.CSSProperties, state: SelectState) => {
    const { selectProps: { isCustomSingleValue } } = state;
    return ({
      ...provided,
      fontSize: '14px',
      lineHeight: '17px',
      color: isCustomSingleValue ? theme.blackColor : 'inherit',
      fontWeight: isCustomSingleValue ? 500 : 'inherit',
    });
  },
  multiValueLabel: (provided: React.CSSProperties) => ({
    ...provided,
    color: theme.blackColor,
    padding: '3px 5px',
    paddingRight: 2,
    fontWeight: 500,
  }),
  multiValue: (provided: React.CSSProperties) => ({
    ...provided,
    backgroundColor: theme.whiteColor,
  }),
  multiValueRemove: (provided: React.CSSProperties) => ({
    ...provided,
    cursor: 'pointer',
    [':hover']: {
      backgroundColor: theme.whiteColor,
      color: false,
    },
  }),
  noOptionsMessage: (provided: React.CSSProperties) => ({
    ...provided,
    color: theme.grayColor,
  }),
  valueContainer: (provided: React.CSSProperties) => ({
    ...provided,
    minHeight: '36px',
  }),
};
