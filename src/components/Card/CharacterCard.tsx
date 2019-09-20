import React from 'react';

import { CardItemType } from 'types';

import './CharacterCard.scss';

interface CharacterCardProps {
  character: CardItemType;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character: { image, name, status, species },
}) => {
  return (
    <React.Fragment>
      <div className='card-wrapper'>
        <div className='card-wrapper-avatar'>
          <img src={image}
            alt={name} />
          <div className='card-wrapper-title'>
            {name}
          </div>
          <div className='card-wrapper-body'>
            <div className='card-wrapper-info'>
              <p>Status</p>
              <span>{status}</span>
            </div>
            <div className='card-wrapper-info'>
              <p>Species</p>
              <span>{species}</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CharacterCard;
