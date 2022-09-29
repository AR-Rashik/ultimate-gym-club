import React from 'react';
import Exercises from '../Exercises/Exercises';
import QnA from '../QnA/QnA';
import './Main.css';

const Main = () => {
  return (
    <div className='main-container container-fluid'>
      <Exercises></Exercises>
      <QnA></QnA>
    </div>
  );
};

export default Main;