import React from 'react';
import Activity from '../Activity/Activity';
import Exercises from '../Exercises/Exercises';

const Main = () => {
  return (
    <div className='main-container d-flex'>
      <Exercises></Exercises>
      <Activity></Activity>
    </div>
  );
};

export default Main;