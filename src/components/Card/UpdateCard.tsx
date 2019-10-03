import React from 'react';
import { styled } from 'theme';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { InputField } from 'components/Form';
import { ModalContainer } from 'components/Modal';
import { HandleUpdateOneCharacter, HandleToggleModal } from 'store/domains';

const Wrapper = styled.div`
  width: 100%;
`;

export interface UpdateCardProps {
  onCancel: () => void;
  title: string;
  isLoading?: boolean;
  isModalOpen: boolean;
  buttonsDisabled?: boolean;
  acceptButtonName?: string;
  cancelButtonName?: string;
  handleUpdateOneCharacter: HandleUpdateOneCharacter;
  handleToggleModal: HandleToggleModal;
}

type UpdateCardAllProps = UpdateCardProps & InjectedFormProps<{}, UpdateCardProps>;

const UpdateCard: React.FC<UpdateCardAllProps> = ({
  onCancel,
  title,
  isModalOpen,
  handleSubmit,
  handleToggleModal,
  handleUpdateOneCharacter,
}) => (
    <ModalContainer
      isModalOpen={isModalOpen}
      maxWidth="350px"
      height="auto"
      title={title}
      closeModal={onCancel}
    >
      <Wrapper>
        <form onSubmit={
          handleSubmit(data => {
            handleUpdateOneCharacter(data);
            handleToggleModal(false);
          })
        }>
          <Field
            id="status"
            name="status"
            placeholder="Enter status"
            component={InputField}
            isRequired={true}
            label="Status"
          />
          <Field
            id="species"
            name="species"
            placeholder="Enter species"
            component={InputField}
            isRequired={true}
            label="Species"
          />
          <Field
            id="type"
            name="type"
            placeholder="Enter type"
            component={InputField}
            isRequired={true}
            label="Type"
          />
          <Field
            id="gender"
            name="gender"
            placeholder="Enter gender"
            component={InputField}
            isRequired={true}
            label="Gender"
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </Wrapper>
    </ModalContainer >
  );

export default reduxForm<{}, UpdateCardProps>({
  form: 'updateCard',
})(UpdateCard);
