import React from 'react';



const Stats = ({ data }) => {

console.log(data);
  if (!data) {
    return null;
  }

  return (
    <div className='stats-sec'>
      <div className='stats'>
        <div className='stats-item'>
          <p>IP ADDRESS</p>
          <span>{data.ip}</span>
        </div>

        <div className='stats-item'>
          <p>LOCATION</p>
          <span>
            {data.location.city}, {data.location.region}, {data.location.country}
          </span>
        </div>

        <div className='stats-item'>
          <p>TIMEZONE</p>
          <span>{data.location.timezone}</span>
        </div>

        <div className='stats-item'>
          <p>ISP</p>
          <span>{data.isp}</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
