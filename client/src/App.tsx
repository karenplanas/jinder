import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CreateJobOffer } from "./components/CreateJobOffer/CreateJobOffer";
import { JobList } from "./components/JobList/JobList";
import { JobSeekerProfileSkills } from "./components/CreateJobSeekerProfile/JobSeekerProfileSkills";
import { JobSeekerProfileLookingFor } from "./components/CreateJobSeekerProfile/JobSeekerProfileLookingFor";
import { JobSeekerProfileExperience } from "./components/CreateJobSeekerProfile/JobSeekerProfileExperience";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";


import FavouritesList from "./components/FavouritesList/FavouritesList";



import { UserContextProvider, useUserContext } from "./contexts/UserContext";

import { ChatList } from "./components/ChatList/ChatList";
import "./App.css";
import ChatRoom from "./components/ChatRoom/ChatRoom";

// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
const RequireAuth: React.FC = ({ children }) => {
  const { user } = useUserContext();
  const location = useLocation();

  if (!user && process.env.REACT_APP_AUTH_ENABLED) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/favourites"
            element={
              <RequireAuth>
                <FavouritesList />
              </RequireAuth>
            }
          />
          <Route path="/home" element={<JobList />} />
          <Route
            path="/chatList"
            element={
              <RequireAuth>
                <ChatList />
              </RequireAuth>
            }
          />
          <Route
            path="/job-position/edit"
            element={
              <RequireAuth>
                <CreateJobOffer />
              </RequireAuth>
            }
          />
          <Route path="/chatRoom/:id" element={<ChatRoom />} />
          <Route
            path="/job-seeker-profile/edit"
            element={
              <RequireAuth>
                <JobSeekerProfileExperience />
              </RequireAuth>
            }
          />
          <Route
            path="/job-seeker-profile/edit/experience"
            element={
              <RequireAuth>
                <JobSeekerProfileExperience />
              </RequireAuth>
            }
          />
          <Route
            path="/job-seeker-profile/edit/skills"
            element={
              <RequireAuth>
                <JobSeekerProfileSkills />
              </RequireAuth>
            }
          />
          <Route
            path="/job-seeker-profile/edit/looking-for"
            element={
              <RequireAuth>
                <JobSeekerProfileLookingFor />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
