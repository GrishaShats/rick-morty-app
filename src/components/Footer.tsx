import React from 'react';

import { styled } from 'theme';

const Wrapper = styled.div`
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #efefef;
  text-align: center;
`;

interface FooterProps {
  charactersLength: number;
}

const Footer: React.FC<FooterProps> = ({
  charactersLength,
}) => {
  return (
    <Wrapper>
      <p>Characters: {charactersLength}</p>
    </Wrapper >
  );
};

export default Footer;
