import React from "react";
import "./ApplicantsData.css";

// individual applicant card
function Applicant({ applicantInfo }) {
  return (
    <>
      <div className="applicant-card">
        <h2 id="program">{applicantInfo.Program}</h2>
        <h5 id="school">{applicantInfo.School}</h5>
        <h3 id="average">{applicantInfo.Average} %</h3>
      </div>
    </>
  );
}

export default Applicant;
