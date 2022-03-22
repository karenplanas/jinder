import { useState } from "react";
import Building from "../icons/Building";
import People from "../icons/People";
import "./job.css";

const Job = (props) => {
  const [detail, setDetail] = useState(false);

  const handleCLick = () => {
    if (detail === true) {
      setDetail(false);
    } else setDetail(true);
  };

  return (
    <>
      {!detail ? (
        <div className="job_container" onClick={handleCLick}>
          <div className="card_header">
            <div className="company_logo">
              <div className="buildingLogo">
                {" "}
                <Building />
              </div>
            </div>
            <div className="header_text">
              <h3 className="company_name">{props.data.companyname}</h3>
              <div className="company_size_container">
                <div className="company_size_logo">
                  {" "}
                  <div className="sizeLogo">
                    <People />
                  </div>
                </div>
                <h2 className="company_size">201 - 500 employees</h2>
              </div>
            </div>
          </div>
          <div className="card_body">
            <h2 className="jobPosition">{props.data.position}</h2>
            <p className="jobBio"> {props.data.bio} </p>
          </div>
          <div className="jobSalary">
            <h3 className="salarySlogan">Salary</h3> {props.data.salary}
          </div>
          <div className="remoteContainer">
            <p className="isRemote"> Remote possible</p>
          </div>
          <div className="locationContainer">
            <h3 className="locationString">{props.data.location}</h3>
          </div>
        </div>
      ) : (
        <div className="detail_container" onClick={handleCLick}>
          <div className="card_header">
            <div className="company_logo">
              <div className="buildingLogo">
                {" "}
                <Building />
              </div>
            </div>
            <div className="header_text">
              <h3 className="company_name">{props.data.companyname}</h3>
              <div className="company_size_container">
                <div className="company_size_logo">
                  {" "}
                  <div className="sizeLogo">
                    <People />
                  </div>
                </div>
                <h2 className="company_size">201 - 500 employees</h2>
              </div>
            </div>
          </div>
          <div className="card_body high-z">
            <h2 className="jobPosition">{props.data.position}</h2>
            <p className="jobBio"> {props.data.bio} </p>
          </div>
          <div className="jobSalary high-z">
            <h3 className="salarySlogan">Salary</h3> {props.data.salary}
          </div>
          <div className="equityContainer high-z">
            <h3 className="equityString"> Equity</h3> 0-5%
          </div>
          <div className="remoteContainer high-z">
            <p className="isRemote"> Remote possible</p>
          </div>
          <div className="locationContainer high-z">
            <h3 className="locationString">{props.data.location}</h3>
          </div>
          <div className="locationContainer high-z">
            <h3 className="locationString">{props.data.contract}</h3>
          </div>
          <div className="further_details high-z">
            <p className="detail_text high-z">{props.data.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;
