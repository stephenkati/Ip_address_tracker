import React, { useEffect, useState } from 'react'
import Search from './Search';
import Stats from './Stats';

const Header = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');
  const [cordinates, setCordinates] = useState({});

  const fetchLocation = async (ipAddress = "") => {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_LqvZb0xjATcBPhCOuMBNIn6dLXRqv&ipAddress=${ipAddress}`);

    const data = await response.json();

    setIpAddress(data.ip);
    setLocation(`${data.location.city}, ${data.location.country} ${data.location.geonameId}`);
    setTimezone(`UTC ${data.location.timezone}`);
    setIsp(data.isp);
    setCordinates({
      lat: data.location.lat,
      lng: data.location.lng
    });
  };

  useEffect(()=> {
    fetchLocation();
  }, [])

  return (
    <div className='header'>
      <h1>Ip Address Tracker</h1>
      <Search />
      <Stats
        ipAddress={ipAddress}
        location={location}
        timezone={timezone}
        isp={isp}
      />
    </div>
  )
}

export default Header;
