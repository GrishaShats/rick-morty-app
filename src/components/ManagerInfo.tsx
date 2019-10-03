import React from 'react';
import { Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { styled } from 'theme';

import { InputField } from 'components/Form';

import { HandleSetOneManager } from 'store/domains';

const Wrapper = styled.div`
  max-width: 600px;
`;

interface ManagerInfoProps {
  handleSetOneManager: HandleSetOneManager;
}

type ManagerInfoAllProps = ManagerInfoProps & InjectedFormProps<{}, ManagerInfoProps>;

const ManagerInfo: React.FC<ManagerInfoAllProps> = ({
  handleSubmit,
  handleSetOneManager,
}) => {

  return (
    <Wrapper className='card-wrapper'>
      <Flex flexDirection="column" m={20}>
        <form onSubmit={
          handleSubmit((data: any) => {
            handleSetOneManager(data);
          })
        }>
          <Field
            id="name"
            name="name"
            placeholder="Enter name"
            component={InputField}
            isRequired={true}
            label="Name"
          />
          <Field
            id="token"
            name="token"
            placeholder="Enter token"
            component={InputField}
            isRequired={true}
            label="Token"
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </Flex>
    </Wrapper>
  );
};

export default reduxForm<{}, ManagerInfoProps>({
  form: 'managerInfo', enableReinitialize: true, keepDirtyOnReinitialize: true,
})(ManagerInfo);
