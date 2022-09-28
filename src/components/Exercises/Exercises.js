import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = () => {

  const [exercises, setExercise] = useState([]);
  useEffect(() => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data))
  }, [])

  return (
    <div className='container m-5 w-75'>
      <h1 className='mb-3'>Ultimate Gym Club</h1>
      <h3 className='mb-5'>Select your todays exercise</h3>
      <div className='row row-cols-3'>
      {
        exercises.map(exercise => <Exercise
          key={exercise.id}
          exercise={exercise}
        ></Exercise>)
      }
      </div>
    </div>
  );
};

export default Exercises;