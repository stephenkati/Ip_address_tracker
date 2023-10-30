import React from 'react';
import Search from './Search';
import Stats from './Stats';

const Header = ({ data }) => {

  return (
    <div className="header">
      <h1>Ip Address Tracker</h1>
      <Search />
      <Stats data={data} />
    </div>
  );
};

export default Header;
