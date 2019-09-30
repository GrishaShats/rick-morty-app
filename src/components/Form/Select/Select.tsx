import React from 'react';
import Select, { components } from 'react-select';
import { OptionProps } from 'react-select/src/components/Option';
import { Props as SelectProps } from 'react-select/src/Select';

import MultiSelectOption from './Option';

import { withFormField } from '../withFormField';

import { customStyles } from './customStyles';

interface InputValue {
  inputValue: string;
}

const loadingMessage = (_obj: InputValue) => 'Options are being fetched';
const defaultNoOptionsMsg = (_obj: InputValue) => 'No options';
const preventNoOptionsMsg = (): null => null;

export interface SelectInputProps<T = object> extends Omit<SelectProps<T>, 'isDisabled'> {
  modifySelectOption?: (data: OptionProps<T>) => void;
  isCustomSingleValue?: boolean;
  disabled?: boolean;
}

export const SelectInput = <T extends {}>({
  id,
  isMulti,
  isCustomSingleValue,
  disabled,
  isDisabled,
  placeholder = 'Select type',
  ...extraProps
}: SelectInputProps<T>) => {
  return (
    <Select
      inputId={id}
      classNamePrefix="form-select"
      styles={customStyles}
      loadingMessage={loadingMessage}
      className="form-select"
      isMulti={isMulti}
      isClearable={false}
      openMenuOnFocus={true}
      tabSelectsValue={false}
      isSearchable={false}
      closeMenuOnSelect={!isMulti}
      blurInputOnSelect={!isMulti}
      hideSelectedOptions={!isMulti}
      openMenuOnClick={!isCustomSingleValue}
      menuShouldScrollIntoView={true}
      isDisabled={disabled || isDisabled}
      noOptionsMessage={isCustomSingleValue ? preventNoOptionsMsg : defaultNoOptionsMsg}
      components={
        {
          Option: isMulti ? MultiSelectOption : components.Option,
          IndicatorSeparator: null,
        }
      }
      maxMenuHeight={165}
      placeholder={placeholder}
      {...extraProps}
    />
  );
};

export const SelectField = withFormField(SelectInput);
