<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./components/Login/Login";
import CreateJobOffer from './components/CreateJob/CreateJobOffer';
import { CreateJobSeekerProfile } from './components/CreateJobSeekerProfile/CreateJobSeekerProfile';
=======
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import CreateJobOffer from "./components/CreateJob/CreateJobOffer";
import { CreateJobSeekerProfile } from "./components/CreateJobSeekerProfile/CreateJobSeekerProfile";
import JobList from "./components/jobList/joblist";
import { getJobs } from "./services/api-client";
>>>>>>> master

const App: React.FC = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <h1> Jinder!! be a slut to get a job </h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/job-position/edit" element={<CreateJobOffer />} />
        <Route path="/job-seeker-profile/edit" element={<CreateJobSeekerProfile />} />
=======
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/job-position/edit" element={<CreateJobOffer />} />
        <Route
          path="/job-seeker-profile/edit"
          element={<CreateJobSeekerProfile />}
        />
        <Route path="/home" element={<JobList />} />
>>>>>>> master
      </Routes>
    </BrowserRouter>
  );
};

export default App;
