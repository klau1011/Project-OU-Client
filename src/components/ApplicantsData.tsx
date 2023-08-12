import React, { useState, useEffect, FC, ChangeEvent} from "react";
import Axios from "axios";
import "./ApplicantsData.css";
import {Applicant} from './index'


interface User{
  Program: string;
  School: string;
  Average: number;
}

// applicant data page
const ApplicantsData: FC = () => {
  // states
  const [listOfUsers, setListOfUsers] = useState<Array<Object>>([]);
  const [search, setSearch] = useState<string>("");
  const [year, setYear] = useState<number>(2022)
  const [dropSearch, setDropSearch] = useState<string>("UofT");

  // LOCAL API:
  // http://localhost:3001/ApplicantData

  // fetch data from backend api end point
    useEffect(() => {    
      Axios.get(process.env.REACT_APP_API_URL).then(
        (res) => setListOfUsers(res.data)
      );
    });

  let filteredOnce = listOfUsers;

  // filtered by uni data
  const schools = {
    UofT: ["toronto", "uoft", "uft"],
    Waterloo: ["waterloo", "uw"],
    McMaster: ["mcmaster", "mac"],
    "Queen's": ["queen"],
    UOttawa: ["ottawa"],
    Carleton: ["carleton"],
    Ryerson: ["ryerson", "tmu"],
    Laurier: ["laurier", "wlu", "wilfred"],
    York: ["york"],
  };

  if (dropSearch in schools) {
    filteredOnce = listOfUsers.filter((user) => {
      const schoolCriteria = schools[dropSearch];
      return schoolCriteria.some((criteria) =>
        (user as User).School.toLowerCase().includes(criteria)
      );
    });
  }

  // filtered by user's dynamic search
  const filteredListOfUsers = filteredOnce.filter(
    (user) =>
      (user).Program.toLowerCase().includes(search.toLowerCase()) &&
      parseFloat(user.Average) <= 100
  );

  // calculate average for each program
  let sum = 0;
  let num = 0;

  // calculate the overall average for the program
  filteredListOfUsers.forEach((user: User) => {
    if (!isNaN(parseFloat(user.Average))) {
      sum += parseFloat(user.Average);
      num++;
    }
  });

  const avg = sum / num;

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* header */}
      <div className="body-container">
        <h1>2022-2023 Ontario Applicants Data</h1>
        {/* search input */}
        <div className="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="Find a program..."
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          ></input>
          <div className="uni-select">
            <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setDropSearch(e.target.value)}>
              <option value="Select" disabled>
                University:
              </option>
              <option value="UofT">UofT</option>
              <option value="Waterloo">Waterloo</option>
              <option value="McMaster">McMaster</option>
              <option value="Queen's">Queen's</option>
              <option value="Ryerson">TMU (Ryerson)</option>
              <option value="UOttawa">UOttawa</option>
              <option value="Carleton">Carleton</option>
              <option value="Laurier">Laurier</option>
              <option value="York">York</option>
            </select>
            <i className="arrow down"></i>
          </div>
        </div>
        {/* output */}
        <div className="display-avg">
          {/* round averages to a decimal place */}
          <h4>Average:&nbsp;</h4>{" "}
          <h4 id="avg"> {!isNaN(avg) ? Math.round(avg * 100) / 100 : ""}</h4>
        </div>
        {/* display count */}
        <h6>Count: {!isNaN(avg) && num}</h6>
        {filteredListOfUsers.length < 1 && search === "" ? (
          <p>Loading data...</p>
        ) : (
          ""
        )}
        <div className="cards">
          {filteredListOfUsers.length < 1 && search !== "" ? (
            <h3>No results found for {search} </h3>
          ) : (
            filteredListOfUsers.map((user) => (
              <Applicant Program={(user as User).Program}  School={(user as User).School} Average={(user as User).Average}/>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ApplicantsData;
