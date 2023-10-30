import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Map from '../components/Map';

const Tracker = () => {
  const data = useSelector((state) => state.stats.stats);

  return (
    <div className='tracker'>
      <Header data={data} />
      <Map data={data} />
    </div>
  );
};

export default Tracker;
