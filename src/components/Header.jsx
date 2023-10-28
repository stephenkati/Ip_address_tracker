import React, { useEffect } from 'react';
import Search from './Search';
import Stats from './Stats';


const Header = () => {
  return (
    <div className="header">
      <h1>Ip Address Tracker</h1>
      <Search />
        <Stats />
    </div>
  );
};

export default Header;
