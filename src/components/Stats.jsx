import React, { useEffect } from 'react';
import { fetchLocation } from '../redux/statsReducer';
import { useDispatch, useSelector } from 'react-redux';

const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((state) => state.stats);
  console.log(data);

  useEffect(() => {
    if (!data) {
      dispatch(fetchLocation());
    }
  }, [dispatch, data]);

  // if (!data) {
  //   return null;
  // }

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // return (
  //   <div className='stats-sec'>
  //     <div className='stats'>
  //       <div className='stats-item'>
  //         <p>IP ADDRESS</p>
  //         <span>{data.stats.ip}</span>
  //       </div>

  //       <div className='stats-item'>
  //         <p>LOCATION</p>
  //         <span>
  //           {data.stats.location.city}, {data.stats.location.region}, {data.stats.location.country}
  //         </span>
  //       </div>

  //       <div className='stats-item'>
  //         <p>TIMEZONE</p>
  //         <span>{data.stats.location.timezone}</span>
  //       </div>

  //       <div className='stats-item'>
  //         <p>ISP</p>
  //         <span>{data.stats.isp}</span>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Stats;
