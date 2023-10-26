import React from 'react'

const Stats = ({
  ipAddress,
  location,
  timezone,
  isp
}) => {
  return (
    <div className='stats-sec'>
      <div className='stats'>
        <div className='stats-item'>
          <p>IP ADDRESS</p>
          <span> {ipAddress} </span>
        </div>

        <div className='stats-item'>
          <p>LOCATION</p>
          <span> {location} </span>
        </div>

        <div className='stats-item'>
          <p>TIMEZONE</p>
          <span> {timezone} </span>
        </div>

        <div className='stats-item'>
          <p>ISP</p>
          <span> {isp} </span>
        </div>
      </div>
    </div>
  )
}

export default Stats;
