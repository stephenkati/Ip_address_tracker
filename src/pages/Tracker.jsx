import React, { useEffect } from 'react'
import Header from '../components/Header';
import { fetchLocation } from '../redux/statsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Map from '../components/Map';

const Tracker = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.stats.stats);

  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);
  
  return (
    <div className='tracker'>
      <Header data={data} />
      <Map data={data} />
    </div>
  )
}

export default Tracker;
