import React from 'react';
import './Exercise.css';

const Exercise = ({exercise,handleAddToList}) => {

  const {id, picture, name, about, age, timeRequired} = exercise;
  const cardText = about.length > 110 ? about.slice(0, 110) + '...' : about;

  return (
    <div className="exercise mt-3 col">
      <div className="card">
        <div className='p-3'>
          <img src={picture} className="img-fluid rounded-2 card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title text-color">{name}</h5>
          <p className="card-text text-secondary">{cardText}</p>
          <p className='fw-semibold text-color'>For age: <span className='fw-bold'>{age}</span></p>
          <p className='fw-semibold text-color'>Time required: <span className='fw-bold'>{timeRequired}s</span></p>
          <button onClick={() => {handleAddToList(exercise)}} className="btn btn-color text-dark w-100 fw-semibold py-2">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;