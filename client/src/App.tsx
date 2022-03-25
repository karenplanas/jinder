import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateJobOffer } from "./components/CreateJobOffer/CreateJobOffer";
import { JobList } from "./components/JobList/JobList";
import { JobSeekerProfileSkills } from "./components/CreateJobSeekerProfile/JobSeekerProfileSkills";
import { JobSeekerProfileLookingFor } from "./components/CreateJobSeekerProfile/JobSeekerProfileLookingFor";
import { JobSeekerProfileExperience } from "./components/CreateJobSeekerProfile/JobSeekerProfileExperience";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";

import { ChatList } from "./components/ChatList/ChatList";

import "./App.css";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import FavouritesList from "./components/FavouritesList/FavouritesList";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/favourites" element={<FavouritesList />} />
        <Route path="/home" element={<JobList />} />
        <Route path="/chatList" element={<ChatList />} />
        <Route path="/job-position/edit" element={<CreateJobOffer />} />
        <Route path="/chatRoom/:id" element={<ChatRoom />} />
        <Route
          path="/job-seeker-profile/edit"
          element={<JobSeekerProfileExperience />}
        />
        <Route
          path="/job-seeker-profile/edit/experience"
          element={<JobSeekerProfileExperience />}
        />
        <Route
          path="/job-seeker-profile/edit/skills"
          element={<JobSeekerProfileSkills />}
        />
        <Route
          path="/job-seeker-profile/edit/looking-for"
          element={<JobSeekerProfileLookingFor />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
