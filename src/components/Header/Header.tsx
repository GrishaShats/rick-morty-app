import React from 'react';

import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="background">
        <h1 className="title">
          The Rick And Morty
        </h1>
      </div>
    );
  }
}

export default Header;
