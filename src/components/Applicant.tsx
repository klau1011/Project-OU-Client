import React, {FC} from "react";
import "./ApplicantsData.css";

type ApplicantProps = {
  Program: string;
  School: string;
  Average: number;
}

// individual applicant card
const Applicant: FC<ApplicantProps> = ({Program, School, Average}) => {

  return (
    <>
      <div className="applicant-card">
        <h2 id="program">{Program}</h2>
        <h5 id="school">{School}</h5>
        <h3 id="average">{Average} %</h3>
      </div>
    </>
  );
}

export default Applicant;
