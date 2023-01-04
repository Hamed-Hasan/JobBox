import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../../app/features/job/jobApi";

const Jobs = () => {
  const navigate = useNavigate();
  const {data, isLoading, isError} = useGetJobsQuery()

  return (
    <div className='pt-14'>
      <h1>This is job page</h1>
      <div>
        <h1>THIS IS A JOB</h1>
        {
          data?.data.map(({position, experience, _id}) => (
            <div>
              <h1>{position}</h1>
              <h1>{experience}</h1>
        <button 
        onClick={() => navigate(`/job-details/${_id}`)} 
        className='shadow-lg bg-slate-400 p-3 rounded-lg m-3'>Job Details</button>
      
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Jobs;
