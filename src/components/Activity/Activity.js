import React, { useEffect, useState } from 'react';
import profile from '../../profile.jpg';
import { addToDB, getFromDb } from '../../utilities/fakedb';
import BreakTime from '../BreakTime/BreakTime';
import './Activity.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        {
          breakTimes.map(breakTime => <BreakTime 
            
            breakTime={breakTime}
            handleBreakTime={handleBreakTime}
            key={breakTime}
            ></BreakTime>)
        }
        {/* <div onClick={(event) => handleBreakTime(event)} className='p-2 rounded-circle bg-light pointer'> 10 </div>
        <div onClick={(event) => handleBreakTime(event)} className='p-2 rounded-circle bg-light pointer'> 20 </div>
        <div onClick={(event) => handleBreakTime(event)} className='p-2 rounded-circle bg-light pointer'> 30 </div>
        <div onClick={(event) => handleBreakTime(event)} className='p-2 rounded-circle bg-light pointer'> 40 </div>
        <div onClick={(event) => handleBreakTime(event)} className='p-2 rounded-circle bg-light pointer'> 50 </div> */}
      </div>
      <h3 className='pt-4'>Exercise Details</h3>
      <div className='mt-4 d-flex justify-content-between align-items-center bg-info rounded-2 p-3 mb-2'>
        <div>
          Exercise time
        </div>
        <div>
          {totalSeconds} seconds
        </div>
      </div>
      <div className='mt-4 d-flex justify-content-between align-items-center bg-info rounded-2 p-3 mb-5'>
        <div>
          Break time
        </div>
        <div>
          {time} seconds
        </div>
      </div>
      <div>
      <button onClick={showToastMessage} className='btn btn-primary w-100 p-3'>Activity Completed</button>
      <ToastContainer />
      </div>
    </div>
  );
};

export default Activity;