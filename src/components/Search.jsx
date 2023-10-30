import React, { useState } from 'react';
import Arrow from '/icon-arrow.svg';

import { useDispatch, useSelector } from 'react-redux';
import { fetchLocation } from '../redux/statsSlice';

const Search = () => {
  const [ipAddress, setIpAddress] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.stats.isLoading);

  const handleClick = () => {
    dispatch(fetchLocation(ipAddress));
  };

  return (
    <form className='search'>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />

      <button
        className='search-icon'
        type='button'
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? ( 
          <span className='loading'>Loading...</span>
        ) : <img src={Arrow} alt='>' />}
      </button>
    </form>
  );
};

export default Search;
