import React from 'react';

import { styled } from 'theme';

const Wrapper = styled.div`
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #efefef;
  text-align: center;
`;

const Footer: React.FC<{}> = () => {
  return (
    <Wrapper>
      <p>Footer</p>
    </Wrapper >
  );
};

export default Footer;
