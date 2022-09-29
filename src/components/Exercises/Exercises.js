import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import './Exrcises.css';

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
    <div className='d-flex'>
      <div className='exercises container p-5 w-75'>
        <h1 className='mb-3'>Ultimate Gym Club</h1>
        <h3 className='mb-5'>Select your todays exercise</h3>
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