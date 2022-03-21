import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import CreateJobOffer from "./components/CreateJob/CreateJobOffer";
import { CreateJobSeekerProfile } from "./components/CreateJobSeekerProfile/CreateJobSeekerProfile";
import JobList from "./components/jobList/joblist";
import { getJobs } from "./services/PostJobOffer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/job-position/edit" element={<CreateJobOffer />} />
        <Route
          path="/job-seeker-profile/edit"
          element={<CreateJobSeekerProfile />}
        />
        <Route path="/home" element={<JobList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
