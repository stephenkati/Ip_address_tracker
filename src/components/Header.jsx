import React, { useEffect } from 'react';
import Search from './Search';
import Stats from './Stats';
import { fetchLocation } from '../redux/statsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.stats.stats);

  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);

  return (
    <div className="header">
      <h1>Ip Address Tracker</h1>
      <Search />
      <Stats data={data} />
    </div>
  );
};

export default Header;
