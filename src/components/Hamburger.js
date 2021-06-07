import { slide as Menu } from 'react-burger-menu';
import React from 'react';

class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="workout" className="menu-item" href="/">Workout</a>
        <a id="history" className="menu-item" href="/about">History</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default Hamburger;