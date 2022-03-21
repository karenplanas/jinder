import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateJobOffer } from "./components/CreateJob/CreateJobOffer";
import { CreateJobSeekerProfile } from "./components/CreateJobSeekerProfile/CreateJobSeekerProfile";
import { JobList } from "./components/jobList/joblist";
//import Login from "./components/Login/Login";
import "./App.css";
import { JobSeekerProfileSkills } from "./components/CreateJobSeekerProfile/JobSeekerProfileSkills";
import { JobSeekerProfileLookingFor } from "./components/CreateJobSeekerProfile/JobSeekerProfileLookingFor";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<JobList />} />
        <Route path="/job-position/edit" element={<CreateJobOffer />} />
        <Route path="/job-seeker-profile/edit/experience" element={<CreateJobSeekerProfile />} />
        <Route path="/job-seeker-profile/edit/skills" element={<JobSeekerProfileSkills />} />
        <Route path="/job-seeker-profile/edit/looking-for" element={<JobSeekerProfileLookingFor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
