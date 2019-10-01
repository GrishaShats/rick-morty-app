import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from 'theme';

import { HandleToggleModal } from 'store/domains';

const Wrapper = styled.div`
  width:200px;
  display: flex;
  flex-flow: column wrap;
  border: 1px solid ${({ theme }) => theme.grayColor};
  border-radius: .80rem;
  margin: 20px;
  img{
    width: 198px;
    height: 200px;
    border-top-left-radius: .80rem;
    border-top-right-radius: .80rem;
    opacity: 1;
    margin: 0px;
    transition: opacity 0.5s ease 0s;
  }
  .title {
    margin:10px
  }
  .body {
    padding: 0 20px 0 20px;
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }
  }
`;

interface CharacterCardProps {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  handleDeleteCharacter?: () => void;
  handleSetInitialForm?: () => void;
  handleToggleModal?: HandleToggleModal;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  image,
  name,
  status,
  species,
  handleDeleteCharacter,
  handleSetInitialForm,
  handleToggleModal,
}) => (
    <React.Fragment>
      <Wrapper className='card-wrapper'>
        <div>
          {handleDeleteCharacter ? (
            <Link to={`/character/${id}`}>
              <img src={image} alt={name} />
            </Link>
          ) : (
              <img src={image} alt={name} />
            )}
          <div className='title'>
            {name}
          </div>
          <div className='body'>
            <div className='info'>
              <p>Status</p>
              <span>{status}</span>
            </div>
            <div className='info'>
              <p>Species</p>
              <span>{species}</span>
            </div>
          </div>
          {handleDeleteCharacter &&
            <button
              onClick={handleDeleteCharacter}
              className="btn btn-default"
            >
              Delete
            </button>
          }
          {handleToggleModal &&
            <button
              onClick={() => {
                handleToggleModal(true);
                handleSetInitialForm();
              }}
              className="btn btn-default"
            >
              Update
          </button>
          }
        </div>
      </Wrapper>
    </React.Fragment>
  );

export default CharacterCard;
