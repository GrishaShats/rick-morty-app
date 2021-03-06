import React from 'react';

import { styled } from 'theme';

const Background = styled.div`
  height: 300px;
  // background: url(../../static/bg-header.jpg) 100% 100% no-repeat;
  background - size: 100 % 100 %;
  text-align: center;
`;

const Header: React.FC<{}> = () => {
  return (
    <Background className="background">
      <h1 className="title">
        The Rick And Morty
      </h1>
    </Background>
  );
};

export default Header;
