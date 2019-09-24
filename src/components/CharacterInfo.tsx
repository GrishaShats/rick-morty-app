import React from 'react';

import { styled } from 'theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px;
  .info-field{
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.grayColor};
    border-right: 1px solid ${({ theme }) => theme.grayColor};
    border-left: 1px solid ${({ theme }) => theme.grayColor};
  }
  .info-field:not(:last-child) {
    border-top: 1px solid ${({ theme }) => theme.grayColor};
  }

`;

interface CharacterInfoProps {
  type: string;
  gender: string;
  origin: string;
  location: string;
  episode: string;
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({
  type,
  gender,
  origin,
  location,
  episode,
}) => {

  return (
    <Wrapper className='card-wrapper'>
      <div className='info-field'>
        <div>
          <span>Type</span>
        </div>
        <span>{type ? type : 'Unknown'}</span>
      </div>

      <div>
        <div className='info-field'>
          <div>
            <span>Gender</span>
          </div>
          <span>{gender}</span>
        </div>
      </div>

      <div>
        <div className='info-field'>
          <div>
            <span>Оrigin</span>
          </div>
          <span>{origin}</span>
        </div>
      </div>

      <div>
        <div className='info-field'>
          <div>
            <span>Location</span>
          </div>
          <span>{location}</span>
        </div>
      </div>

      <div>
        <div className='info-field'>
          <div>
            <span>Episode</span>
          </div>
          <span>{episode}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default CharacterInfo;
