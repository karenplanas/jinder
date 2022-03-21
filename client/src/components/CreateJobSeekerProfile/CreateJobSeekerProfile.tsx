import React from "react";
import { Button } from "../Button/Button";
import { Logo } from "../icons/Logo";
import { InputTextField } from "../InputTextField/InputTextField";
import { ProfileTabsNav } from "../ProfileTabsNav/ProfileTabsNav";
import "./CreateJobSeekerProfile.css";

const CreateJobSeekerProfile: React.FC = () => {
  return (
    <div>
      <Logo height={70} width={70} />
      <ProfileTabsNav />
      <div>
        <div className="CreateJobSeekerProfile-Experience profile-sections">
          <h3>Experience</h3>
          <InputTextField placeholder="Title" name="title" label="Title" />
          <InputTextField
            placeholder="Company Name"
            name="company-name"
            label="Company Name"
          />
          <InputTextField
            placeholder="Location"
            name="location"
            label="Location"
          />
          <div className="dates">
            <InputTextField
              placeholder="YYYY-MM"
              name="start-date"
              label="Start Date"
            />
            <InputTextField
              placeholder="YYYY-MM"
              name="end-date"
              label="End Date"
            />
          </div>
          <InputTextField
            placeholder="Description"
            name="description"
            label="Description"
          />
        </div>
        <div className="CreateJobSeekerProfile-Skills profile-sections">
          <h3>Skills</h3>
          <div className="Skills-checks">
            <div>
              <input type="checkbox" name="C++" />
              <label htmlFor="C++">C++</label>
            </div>
            <div>
              <input type="checkbox" name="JS" />
              <label htmlFor="C++">JS</label>
            </div>
            <div>
              <input type="checkbox" name="TS" />
              <label htmlFor="C++">TS</label>
            </div>
          </div>
          <InputTextField
            name="others-skills"
            placeholder="Type something here..."
            label="Others"
          />
        </div>
        <div className="CreateJobSeekerProfile-LookingFor profile-sections">
          <h3>Looking For</h3>
          <div className="LookingFor-checks">
            <div>
              <input type="checkbox" name="Front-end" />
              <label htmlFor="Front-end">Front-end</label>
            </div>
            <div>
              <input type="checkbox" name="Back-end" />
              <label htmlFor="Back-end">Back-end</label>
            </div>
            <div>
              <input type="checkbox" name="Full-stack" />
              <label htmlFor="Full-stack">Full-stack</label>
            </div>
          </div>
          <InputTextField
            name="others-looking-for"
            placeholder="Type something here..."
            label="Others"
          />
        </div>
        <Button className="outlined" text="Cancel" />
        <Button className="contained" text="Save" />
      </div>
    </div>
  );
};

export { CreateJobSeekerProfile };
