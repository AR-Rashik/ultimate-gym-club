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
    <div className='d-flex justify-content-between'>
      <div className='exercises container m-5 px-5 w-75'>
        <div>
          
          <h1 className='mb-5 fs-2'><span><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Ultimate-Gym-Club</h1>
        </div>
        <h3 className='mb-2 fs-4'>Select your todays exercise</h3>
        <div className='row row-cols-3'>
        {
          exercises.map(exercise => <Exercise
            key={exercise.id}
            exercise={exercise}
            handleAddToList={handleAddToList}
          ></Exercise>)
        }
        </div>
      </div>
      <Activity list={list}></Activity>
    </div>
  );
};

export default Exercises;