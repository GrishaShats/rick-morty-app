import React from 'react';

import { styled } from 'theme';
import { Flex, Box } from '@rebass/grid';

const Wrapper = styled.div`
  max-width: 600px;
  width:100%;
  .info-field{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
      <Flex flexDirection="column" m={20}>
        <Box className='info-field'>
          <div>
            <span>Type</span>
          </div>
          <span>{type ? type : 'Unknown'}</span>
        </Box>

        <Box>
          <div className='info-field'>
            <div>
              <span>Gender</span>
            </div>
            <span>{gender}</span>
          </div>
        </Box>

        <Box>
          <div className='info-field'>
            <div>
              <span>Оrigin</span>
            </div>
            <span>{origin}</span>
          </div>
        </Box>

        <Box>
          <div className='info-field'>
            <div>
              <span>Location</span>
            </div>
            <span>{location}</span>
          </div>
        </Box>

        <Box>
          <div className='info-field'>
            <div>
              <span>Episode</span>
            </div>
            <span>{episode.split('https://rickandmortyapi.com/api/episode/')}</span>
          </div>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default CharacterInfo;
