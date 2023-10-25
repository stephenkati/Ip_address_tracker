import React from 'react'

const Stats = () => {
  return (
    <div className='stats-sec'>
      <div className='stats'>
        <div className='stats-item'>
          <p>IP ADDRESS</p>
          <span>192.168.0.100</span>
        </div>

        <div className='stats-item'>
          <p>LOCATION</p>
          <span>Brooklyn, NY 10001</span>
        </div>

        <div className='stats-item'>
          <p>TIMEZONE</p>
          <span>UTC -05:00</span>
        </div>

        <div className='stats-item'>
          <p>ISP</p>
          <span>SpaceX Starlink</span>
        </div>
      </div>
    </div>
  )
}

export default Stats;
