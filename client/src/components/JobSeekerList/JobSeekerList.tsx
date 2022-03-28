import React, { useEffect, useState } from "react";
import { JobSeekerProfile } from "../../Interfaces/JobSeekerProfile";
import { useAuthenticatedApiClient } from "../../services/authenticated-api-client";

const JobSeekerList = () => {
  const apiClient = useAuthenticatedApiClient();
  const [jobSeekers, setJobSeekers] = useState<JobSeekerProfile[]>([]);
  useEffect(() => {
    console.log(apiClient.getAllJobSeekers().then((data) => console.log(data)));
  }, []);

  return <div></div>;
};

export default JobSeekerList;
