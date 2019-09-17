import React from 'react';
import { CardItem } from 'types';
import './CharacterCard.scss';

type CharacterCardProps = {
  key: number;
  character: CardItem;
}

const CharacterCard: React.StatelessComponent<CharacterCardProps> = (props: any) => {
  return (
    <>
      <div className='card-wrapper'>
        <div className='card-wrapper__avatar'>
          <img src={props.character.image}
            alt={props.character.name} />
          <div className='card-wrapper__title'>
            {props.character.name}
          </div>
          <div className='card-wrapper__body'>
            <div className='card-wrapper__info'>
              <p>Status</p>
              <span>{props.character.status}</span>
            </div>
            <div className='card-wrapper__info'>
              <p>Species</p>
              <span>{props.character.species}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
