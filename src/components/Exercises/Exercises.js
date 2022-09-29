import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import './Exrcises.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Exercises = () => {

  const [exercises, setExercise] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data))
  }, [])

  const handleAddToList = (exercise) => {
    // console.log(exercise);
    const newList =  [...list, exercise];
    setList(newList);
  }

  return (
    <div className='responsive'>
      <div className='exercises m-md-5 mb-3 px-md-5 px-3'>
        <div>
          
          <h1 className='mb-5 fs-2 text-md-center text-lg-start text-center'><span><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Ultimate-Gym-Club</h1>
        </div>
        <h3 className='mb-2 fs-4 text-md-center text-lg-start text-center'>Select your todays exercise</h3>
        <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2'>
        {
          exercises.map(exercise => <Exercise
            key={exercise.id}
            exercise={exercise}
            handleAddToList={handleAddToList}
          ></Exercise>)
        }
        </div>
      </div>
        <div className='activity'>
          <Activity list={list}></Activity>
        </div>
    </div>
  );
};

export default Exercises;