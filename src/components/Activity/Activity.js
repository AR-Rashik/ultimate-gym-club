import React from 'react';
import profile from '../../profile.jpg';

const Activity = () => {
  return (
    <div className='w-25 p-3 '>
      <div className='d-flex align-items-center '>
        <img src={profile} className="img-fluid w-25 rounded-circle" alt="" />
        <div className=' ms-3'>
          <h5>Abdur Rahim</h5>
          <small>Cumilla, Bangladesh</small>
        </div>
      </div>
      <div className='mt-4 d-flex justify-content-around align-items-center bg-info rounded-2 p-2 mb-4'>
        <div>
          <div>75kg</div>
          <div>Weight</div>
        </div>
        <div>
          <div>6.5</div>
          <div>Height</div>
        </div>
        <div>
          <div>25yrs</div>
          <div>Age</div>
        </div>
      </div>
      <h3 className='pt-4'>Add a break</h3>
      <div className='mt-3 d-flex justify-content-around align-items-center bg-info rounded-2 p-3 mb-5'>
        <div className='p-2 rounded-circle bg-light'>10s</div>
        <div className='p-2 rounded-circle bg-light'>20s</div>
        <div className='p-2 rounded-circle bg-light'>30s</div>
        <div className='p-2 rounded-circle bg-light'>40s</div>
        <div className='p-2 rounded-circle bg-light'>50s</div>
      </div>
      <h3 className='pt-4'>Exercise Details</h3>
      <div className='mt-4 d-flex justify-content-between align-items-center bg-info rounded-2 p-3 mb-2'>
        <div>
          Exercise time
        </div>
        <div>
          000 seconds
        </div>
      </div>
      <div className='mt-4 d-flex justify-content-between align-items-center bg-info rounded-2 p-3 mb-5'>
        <div>
          Break time
        </div>
        <div>
          000 seconds
        </div>
      </div>
      <button className='btn btn-primary w-100 p-3'>Activity Completed</button>
    </div>
  );
};

export default Activity;