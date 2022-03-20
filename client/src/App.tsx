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
          <Route path="/CreateJobPosition" element={<CreateJobOffer />} />
          <Route path="/JobSeekerProfile" element={<CreateJobSeekerProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
