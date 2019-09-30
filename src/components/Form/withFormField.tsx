import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import { styled } from 'theme';

import { componentUtil } from 'utils';

export const InputFieldWrapper = styled.div`
  width: 100%;

  text-align: left;
  margin: 20px 0;
  position: relative;

  input[type='number'] {
    -moz-appearance:textfield;
  }
  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

interface TitleProps {
  isRadio?: boolean;
  useMinHeight?: boolean;
}

const TitleWrapper = styled.div<TitleProps>`
  ${({ useMinHeight }) => useMinHeight && 'min-height: 18px;'}
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    padding-bottom: 5px;
    ${({ isRadio }) => isRadio && `
      font-weight: 500;
    `}
  }

  .required-icon,
  .error-msg {
    color: ${({ theme }) => theme.redColor};
  }

  .error-msg {
    font-size: 12px;
  }

  .field-hint {
    height: 18px;
    margin-left: 10px;
  }
`;

export interface FormFieldProps extends Partial<BaseFieldProps> {
  id?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  invalid?: boolean;
  preventBlur?: boolean | undefined;
  validateOnChange?: boolean;
  fieldClassName?: string;
  showErrors?: boolean;
  focusOnLabelClick?: boolean;
  isRequired?: boolean;
  hint?: string;
  hintMinWidth?: string;
}

interface FormFieldWrapperProps {
  render: (
    invalid: boolean,
    preventBlur: boolean | undefined
  ) => React.ReactNode;
}

export type FieldProps = WrappedFieldProps & FormFieldProps;

const FormFieldWrapper: React.FC<FormFieldWrapperProps & FieldProps> = props => {

  const {
    label,
    render,
    preventBlur,
    validateOnChange,
    fieldClassName = '',
    showErrors = true,
    invalid: defaultInvalid = false,
    meta: {
      touched,
      error,
      invalid: fieldInvalid,
      submitFailed,
    },
  } = props;

  let invalid = false;

  if (validateOnChange) {
    invalid = typeof error === 'string' || defaultInvalid;
  } else {
    invalid = (error === true && submitFailed)
      || (typeof error === 'string' && touched) || defaultInvalid;
  }

  const isRadio = fieldClassName === 'radio';

  return (
    <InputFieldWrapper
      className={['form-field', (fieldInvalid && error) ? 'field-error' : '', fieldClassName].join(' ')}
    >
      <TitleWrapper isRadio={isRadio} useMinHeight={showErrors && error && !!!label}>
        {label &&
          <label>
            {label}
          </label>
        }
      </TitleWrapper>
      <div>
        {render(invalid, preventBlur)}
      </div>
    </InputFieldWrapper>
  );
};

export const withFormField = <OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & FormFieldProps>
): React.ComponentType<OriginalProps & FieldProps> =>
  class WithInputField extends
    React.Component<OriginalProps & FieldProps> {

    static displayName = `WithFormField(${componentUtil.getDisplayName(Component)})`;

    render() {
      return (
        <FormFieldWrapper
          {...this.props}
          render={this.renderComponent}
        />
      );
    }

    renderComponent = (invalid: boolean) => (
      <Component
        {...this.props}
        {...this.props.input}
        invalid={invalid}
        onBlur={this.onBlur}
      />
    );

    onBlur = () =>
      this.props.preventBlur
        ? ''
        : setTimeout(() =>
          this.props.input.onBlur(this.props.input.value, this.props.input.name))
  };
