import React from "react";
import { useSelector } from "react-redux";


const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
 


  return (
    <div>
      <h1 className='text-xl py-5'>Applied jobs</h1>
      <div className='grid grid-cols-2 gap-5 pb-5'>
        
      </div>
    </div>
  );
};

export default AppliedJobs;
