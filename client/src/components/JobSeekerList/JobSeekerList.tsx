import React, { useEffect, useState } from "react";
import { JobSeekerProfile } from "../../Interfaces/JobSeekerProfile";
import { useAuthenticatedApiClient } from "../../services/authenticated-api-client";

type Direction = "left" | "right" | "up" | "down";

const JobSeekerList: React.FC = () => {
  const apiClient = useAuthenticatedApiClient();
  const [jobSeekers, setJobSeekers] = useState<JobSeekerProfile[]>([]);
  //   useEffect(() => {
  //     console.log(apiClient.getAllJobSeekers().then((data) => console.log(data)));
  //   }, []);

  useEffect(() => {
    apiClient.getAllJobSeekers().then(({ data }) => setJobSeekers(data));
  }, []);

  return <div></div>;
};

export default JobSeekerList;
