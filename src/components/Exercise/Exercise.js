import React from 'react';

const Exercise = ({exercise}) => {

  const {id, picture, name, about, age, timeRequired} = exercise;

  return (
    <div className="exercise mt-3 col">
      <div className="card">
        <div className='p-3'>
          <img src={picture} className="img-fluid rounded-1 card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p>For age: {age}</p>
          <p>Time required: {timeRequired}s</p>
          <a href="/link" className="btn btn-primary w-100" >Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default Exercise;