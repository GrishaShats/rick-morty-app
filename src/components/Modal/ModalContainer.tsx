import React from 'react';
import ReactModal, { Styles } from 'react-modal';

import { getModalStyles } from './modalStyles';

import { styled } from 'theme';

const CloseMenu: React.FC<{}> = ({ ...props }) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...props}>
    <path d="M16 1L1 16" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 1L16 16" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ReactModal.setAppElement('#root');

const Wrapper = styled.div`
  .title {
    margin-bottom: 15px;
  }
`;

const CloseIconWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 15px;

  svg {
    position: absolute;
    right: 15px;
    top: 15px;
    path {
      stroke: ${({ theme }) => theme.grayColor};
    }

    :hover path {
      stroke: ${({ theme }) => theme.grayColor};
    }
  }
`;

export interface ModalContainerProps {
  isModalOpen: boolean;
  style?: Styles;
  maxWidth?: string;
  height?: string;
  backgroundColor?: string;
  fullScreen?: boolean;
  title?: string;
  closeModal(): void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isModalOpen,
  children,
  style,
  maxWidth,
  height,
  backgroundColor,
  fullScreen,
  title,
  closeModal,
}) => {
  const defaultStyles = getModalStyles({ maxWidth, height, backgroundColor, fullScreen });
  const styles = style ? { ...defaultStyles, ...style } : defaultStyles;

  return (
    <ReactModal isOpen={isModalOpen} style={styles}>
      {closeModal &&
        <CloseIconWrapper onClick={closeModal}>
          <CloseMenu />
        </CloseIconWrapper>
      }
      <Wrapper>
        {title && <p className="title">{title}</p>}
      </Wrapper>
      {children}
    </ReactModal>
  );
};

export default ModalContainer;
