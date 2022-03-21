import { useState } from "react";
import { Building } from "../icons/Building";
import { People } from "../icons/People";
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
          <div className="card_body">
            <ul>
              <li> {props.data.position} </li>
              <li> Salary {props.data.salary} </li>
              <li> Equity 0 - 5% </li>
              <li> Remote possible </li>
              <li> {props.data.Location} </li>
              <li> {props.data.contract} </li>
              {props.data.languages.map((langauge) => {
                return <li> {langauge} </li>;
              })}
            </ul>
          </div>
          <div className="further_details">
            <p className="detail_text">
              {" "}
              Airbnb is a mission-driven company dedicated to helping create a
              world where anyone can belong anywhere. It takes a unified team
              committed to our core values to achieve this goal. Airbnb's
              various functions embody the company's innovative spirit and our
              fast-moving team is committed to leading as a 21st century
              company.
            </p>{" "}
            <br />{" "}
            <p>
              {" "}
              The Community Support Global Voice of Customer Quality Insights
              Analyst will support the day to day activities of the global Voice
              of Customer Program. This role will be responsible for insights
              reporting, analysis, and recommendations to improve the overall
              experience Airbnb customers have with community support.{" "}
            </p>{" "}
            <br />{" "}
            <p>
              Key accountabilities include root cause analysis of key metrics,
              analysis of feedback to determine key drivers of customer loyalty,
              consistent and relevant reporting to internal CS leadership at a
              regional level, tracking and working collaboratively with
              stakeholders to drive continuous improvement, and driving efforts
              to close the loop on customer feedback with both customers and
              internal stakeholders.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;
