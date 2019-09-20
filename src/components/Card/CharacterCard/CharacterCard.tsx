import React from 'react';

import { styled } from 'theme';

const Wrapper = styled.div`
  width:200px;
  display: flex;
  flex-flow: column wrap;
  border: 1px solid ${({ theme }) => theme.grayColor};
  border-radius: .80rem;
  margin: 20px;
  .avatar {
    img{
      width: 198px;
      height: 200px;
      border-top-left-radius: .80rem;
      border-top-right-radius: .80rem;
      opacity: 1;
      margin: 0px;
      transition: opacity 0.5s ease 0s;
    }
  }
  .title {
    margin:10px
  }
  .body {
    padding: 20px;
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }
  }
`;

interface CharacterCardProps {
  image: string;
  name: string;
  status: string;
  species: string;
  handleDeleteCharacter: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  image,
  name,
  status,
  species,
  handleDeleteCharacter,
}) => {

  return (
    <React.Fragment>
      <Wrapper className='card-wrapper'>
        <div className='avatar'>
          <img src={image}
            alt={name} />
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
          <button
            onClick={handleDeleteCharacter}
            className="btn btn-default">
            Delete
          </button>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default CharacterCard;
