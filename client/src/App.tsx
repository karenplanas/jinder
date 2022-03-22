import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JobList from "./components/jobList/joblist";
import Login from "./components/Login/Login";
import CreateJobOffer from "./components/CreateJob/CreateJobOffer";
import { CreateJobSeekerProfile } from "./components/CreateJobSeekerProfile/CreateJobSeekerProfile";
import SignUp from "./components/SignUp/SignUp";
import ChatContainer from "./components/chatContainer/chatContainer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
        <Route path="/favourites" element={<ChatContainer />} />
        <Route path="/home" element={<JobList />} />

        <Route path="/job-position/edit" element={<CreateJobOffer />} />
        <Route
          path="/job-seeker-profile/edit"
          element={<CreateJobSeekerProfile />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
