import React from 'react';
import { styled } from 'theme';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Flex, Box } from '@rebass/grid';

import { InputField, SelectField } from 'components/Form';

import { InputFieldType } from 'types';
import { filterSelectOptions, FilterOptionConsts, HandleFilterCharacters } from 'store/domains';

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
    <form>
      <Flex pl={20} flexWrap="wrap">
        <Box width={[1, , , 0.15, , 0.1]}>
          <Field
            onChange={
              (_event: React.ChangeEvent, newData: InputFieldType) => {
                const value = {
                  type: FilterOptionConsts.TYPE_PROP,
                  inputValue: newData.value,
                };
                handleFilterCharacters(value);
              }
            }
            id="select"
            name="select"
            placeholder="Name"
            component={SelectField}
            options={filterSelectOptions}
          />
        </Box>
        <Box pl={[0, , , 20]} width={[1, , , 0.83, , 0.88]}>
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
            id="input"
            name="input"
            placeholder="Enter value for filter"
            component={InputField}
            isRequired={true}
          />
        </Box>
      </Flex>
    </form>
  );

export default reduxForm<{}, FilterCardProps>({
  form: 'filterForm',
})(FilterCard);
