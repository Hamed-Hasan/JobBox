import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../../app/features/job/jobApi";

const Jobs = () => {
  const user = useSelector(state => state.auth);
  console.log("🚀 ~ file: JobDetails.js:11 ~ JobDetails ~ user", user)
  const navigate = useNavigate();
  const {data, isLoading, isError} = useGetJobsQuery()


  return (
    <div className='pt-14 container mx-auto'>
      <h1 className="text-bold text-xl bg-violet-400 rounded-md p-2">Find Jobs</h1>
      <div>
       
   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
     {
          data?.data.map(({position, experience, _id, location}) => (
          
       
       <div className='bg-white shadow-lg rounded-lg p-3'>
       <div className="flex space-y-9 items-center mb-4 justify-between">
             <p>{position}</p>
             <p>{location}</p>
             </div>
             <div className="flex items-center justify-between">
             <h1>{experience}</h1>
        <button 
        onClick={() => navigate(`/job-details/${_id}`)} 
        className='shadow-lg border-2 border-blue-500 p-3 rounded-lg'>Job Details</button>
             </div>
       </div>
          
          
          ))
        }
     </div>
        </div>
       </div>
   
    
  );
};

export default Jobs;
