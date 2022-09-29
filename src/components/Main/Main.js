import React from 'react';
import Exercises from '../Exercises/Exercises';
import QnA from '../QnA/QnA';

const Main = () => {
  return (
    <div className='main-container'>
      <Exercises></Exercises>
      <QnA></QnA>
    </div>
  );
};

export default Main;