import React, { useEffect, useState } from 'react';
import profile from '../../profile.jpg';
import { addToDB, getFromDb } from '../../utilities/fakedb';
import BreakTime from '../BreakTime/BreakTime';
import './Activity.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Activity = ({list}) => {

  // console.log(list);

  let totalSeconds = 0;
  for(const exercise of list){
    totalSeconds = totalSeconds + exercise.timeRequired;
  }

  
  const breakTimes = [10, 20, 30, 40, 50];
  const [time, setTime] = useState([0]);

  
  
  const handleBreakTime = (breakTime) => {
      addToDB(breakTime);
      setTime(breakTime);
    }

  
    useEffect(() => {
      setTime(getFromDb('time'))
    }, [])
    
    
    const showToastMessage = () => {
      toast.success('Successfully activity completed!', {
          position: toast.POSITION.TOP_CENTER,
          className: 'toast-message'
      });
  };

    // const getFromDB = () => {
    //   const newTime = localStorage.getItem('time');
    //   setbrTime(newTime);
    // }
    //  getFromDB();
    

  // let [breakTime, setBreakTime] = useState("");
  // const handleBreakTime = (event) => {
  //   setBreakTime(event.target.innerText);
  // }

  return (
    <div className='w-25 p-3 activity-container'>
      <div className='d-flex align-items-center '>
        <img src={profile} className="img-fluid w-25 rounded-circle" alt="" />
        <div className=' ms-3'>
          <h5 className='fs-5'>Abdur Rahim</h5>
          <small className='text-light'><span><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span> Cumilla, Bangladesh</small>
        </div>
      </div>
      <div className='mt-4 d-flex justify-content-around align-items-center box-container rounded-2 p-2 mb-4'>
        <div>
          <div><span className='fw-bold fs-5'>70</span>kg</div>
          <div>Weight</div>
        </div>
        <div>
          <div className='fw-bold fs-5'>6.5</div>
          <div>Height</div>
        </div>
        <div>
          <div><span className='fw-bold fs-5'>22</span>yrs</div>
          <div>Age</div>
        </div>
      </div>
      <h4 className='pt-4'>Add a break</h4>
      <div className='mt-2 d-flex justify-content-around align-items-center box-container rounded-2 p-3 mb-5'>
        {
          breakTimes.map(breakTime => <BreakTime 
            
            breakTime={breakTime}
            handleBreakTime={handleBreakTime}
            key={breakTime}
            ></BreakTime>)
        }
      </div>
      <h4 className='pt-4'>Exercise Details</h4>
      <div className='mt-4 d-flex justify-content-between align-items-center box-container rounded-2 p-3 mb-2'>
        <div className='fw-semibold'>
          Exercise time
        </div>
        <div className='text-white'>
          {totalSeconds} seconds
        </div>
      </div>
      <div className='mt-4 d-flex justify-content-between align-items-center box-container rounded-2 p-3 mb-5'>
        <div className='fw-semibold'>
          Break time
        </div>
        <div className='text-white'>
          {time} seconds
        </div>
      </div>
      <div>
      <button onClick={showToastMessage} className='btn btn-color w-100 p-3 fw-semibold'>Activity Completed</button>
      <ToastContainer />
      </div>
    </div>
  );
};

export default Activity;