import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex } from '@rebass/grid';

import { styled } from 'theme';

import { HandleToggleModal } from 'store/domains';

const Wrapper = styled.div`
  width:200px;
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
      <Wrapper>
        <Flex flexWrap="wrap" flexDirection="column">
          <Box>
            {handleDeleteCharacter ? (
              <Link to={`/character/${id}`}>
                <img src={image} alt={name} />
              </Link>
            ) : (
                <img src={image} alt={name} />
              )}
            <Box m={10}>
              {name}
            </Box>
            <Box pr={20} pl={20}>
              <Flex justifyContent="space-between">
                <p>Status</p>
                <span>{status}</span>
              </Flex>
              <Flex justifyContent="space-between">
                <p>Species</p>
                <span>{species}</span>
              </Flex>
            </Box>
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
          </Box>
        </Flex>
      </Wrapper>
    </React.Fragment >
  );

export default CharacterCard;
