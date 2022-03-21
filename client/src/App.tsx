import React from "react";
import "./App.css";
import CreateJobOffer from "./components/CreateJob/CreateJobOffer";
import JobList from "./components/jobList/joblist";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <h1> Jinder!! be a slut to get a job </h1>
      <JobList data={data} />
      <CreateJobOffer></CreateJobOffer>
    </div>
  );
}

export default App;
