import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../../app/features/job/jobApi";

const JobDetails = () => {
  const {id} = useParams()
const {data, isLoading, isError} = useGetJobByIdQuery(id)

  
const { experience} = data?.data || {};
  const navigate = useNavigate();

  return (
    <div className='pt-14'>
      <h1>this is job details</h1>
      <h1>{experience}</h1>
      <button className='border'>Apply</button>
    </div>
  );
};

export default JobDetails;
