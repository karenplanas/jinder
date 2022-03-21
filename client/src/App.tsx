<<<<<<< HEAD
import React from "react";
import "./App.css";
import CreateJobOffer from "./components/CreateJob/CreateJobOffer";
import JobList from "./components/jobList/joblist";
import data from "./data.json";
=======
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./components/Login/Login";
import CreateJobOffer from './components/CreateJob/CreateJobOffer';
import { CreateJobSeekerProfile } from './components/CreateJobSeekerProfile/CreateJobSeekerProfile';
>>>>>>> 0e74ab89e7aea098d2804af4e78af54ef318adab

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <h1> Jinder!! be a slut to get a job </h1>
<<<<<<< HEAD
      <JobList data={data} />
      <CreateJobOffer></CreateJobOffer>
    </div>
=======
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/job-position/edit" element={<CreateJobOffer />} />
        <Route path="/job-seeker-profile/edit" element={<CreateJobSeekerProfile />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 0e74ab89e7aea098d2804af4e78af54ef318adab
  );
}

export default App;
