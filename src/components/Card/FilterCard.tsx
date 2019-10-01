import React from 'react';
import { styled } from 'theme';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { InputField } from 'components/Form';
import { HandleFilterCharacters, filterSelectOptions, FilterOptionConsts } from 'store/domains';
import { SelectField } from 'components/Form/Select';
import { InputFieldType } from 'types';

const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  .form-wrapper {
    display: flex;
    flex-direction: row;
  }
  .select-field {
    width: 150px;
    margin-right: 10px
  }
  .input-field {
    margin-right: 20px
  }
`;

export interface FilterCardProps {
  buttonsDisabled?: boolean;
  acceptButtonName?: string;
  cancelButtonName?: string;
  handleFilterCharacters: HandleFilterCharacters;
}

type FilterCardAllProps = FilterCardProps & InjectedFormProps<{}, FilterCardProps>;

const FilterCard: React.FC<FilterCardAllProps> = ({
  handleFilterCharacters,
}) => (
    <Wrapper>
      <form className="form-wrapper" >
        <Field
          onChange={
            (_event: React.ChangeEvent, newData: InputFieldType) => {
              const value = {
                type: FilterOptionConsts.TYPE_PROP,
                inputValue: newData.value,
              }
              handleFilterCharacters(value);
            }
          }
          className="select-field"
          id="select"
          name="select"
          placeholder="Name"
          component={SelectField}
          options={filterSelectOptions}
        />
        <Field
          onChange={
            (_event: React.ChangeEvent, newData: string) => {
              const value = {
                type: FilterOptionConsts.VALUE_PROP,
                inputValue: newData,
              }
              handleFilterCharacters(value);
            }
          }
          className="input-field"
          id="input"
          name="input"
          placeholder="Enter value for filter"
          component={InputField}
          isRequired={true}
        />
      </form>
    </Wrapper >
  );

export default reduxForm<{}, FilterCardProps>({
  form: 'filterForm',
})(FilterCard);
