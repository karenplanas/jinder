import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,} from "react-router-dom";
import { CreateJobOffer } from "./components/CreateJobOffer/CreateJobOffer";
import { JobSeekerProfileSkills } from "./components/JobSeekerProfile/JobSeekerProfileSkills";
import { JobSeekerProfileLookingFor } from "./components/JobSeekerProfile/JobSeekerProfileLookingFor";
import { JobSeekerProfileExperience } from "./components/JobSeekerProfile/JobSeekerProfileExperience";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { FavouritesList } from "./components/FavouritesList/FavouritesList";
import { UserContextProvider, useUserContext } from "./contexts/UserContext";
import { ChatList } from "./components/ChatList/ChatList";
import {ChatRoom} from "./components/ChatRoom/ChatRoom";
import {EmployerProfile} from "./components/EmployerProfile/EmployerProfile";
import { UserAccountSettings } from "./components/UserAccountSettings/UserAccountSettings";
import { Home } from "./components/Home/Home";
import { VideoChat } from "./components/VideoChat/VideoChat";
import { RoomProvider } from "./contexts/roomContext";
import { VideoRoom } from "./components/VideoRoom/VideoRoom";
import { JobOffersList } from "./components/JobOffersList/JobOffersList";
import "./App.css";


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
        <RoomProvider>
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
            <Route path="/" element={<Home />} />
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
            <Route
            path="/job-position/list"
            element={
              <RequireAuth>
                <JobOffersList />
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
            <Route
              path="/employer-profile/edit"
              element={
                <RequireAuth>
                  <EmployerProfile />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <UserAccountSettings />
                </RequireAuth>
              }
            />
            <Route path="/videoChat" element={<VideoChat />} />
            <Route path="/videoRoom/:id" element={<VideoRoom />} />
          </Routes>
        </RoomProvider>

      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
