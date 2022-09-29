import React from 'react';
import './BreakTime.css';

const BreakTime = ({breakTime, handleBreakTime}) => {
  return (
    <div>
      <div onClick={() => handleBreakTime(breakTime)} className='p-2 rounded-circle btn-color pointer fw-semibold'>{breakTime}s</div>
    </div>
  );
};

export default BreakTime;