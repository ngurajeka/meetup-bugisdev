import React from 'react';
import { Link } from 'react-router';

const menu = [{
  link: '/home',
  label: 'Home',
}, {
  link: '/event',
  label: 'Event',
}];

const Menu = (props) => (
  <ul className="nav navbar-nav">
    {menu.map(item => (
      <li><Link to={item.link} className="mdl-navigation__link">{item.label}</Link></li>
    ))}
  </ul>
);

const Header = (props) => (
  <div className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <Link to="/home" className="navbar-brand">Meetup BugisDev</Link>
        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse" id="navbar-main">
        <Menu />
      </div>
    </div>
  </div>
);

export default Header;
