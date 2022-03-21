import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateJobOffer from './components/CreateJob/CreateJobOffer';
import { CreateJobSeekerProfile } from './components/CreateJobSeekerProfile/CreateJobSeekerProfile';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <h1> Jinder!! be a slut to get a job </h1>
      <Routes>
          <Route path="/job-position/edit" element={<CreateJobOffer />} />
          <Route path="/job-seeker-profile/edit" element={<CreateJobSeekerProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
