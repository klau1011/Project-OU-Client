import React, { useState, useEffect, FC, ChangeEvent, useMemo} from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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

    // filtered by uni data
    const schools = {
      UofT: ["toronto", "uoft", "uft"],
      Waterloo: ["waterloo", "uw"],
      McMaster: ["mcmaster", "mac"],
      "Queen's": ["queen", "queen's"],
      UOttawa: ["ottawa"],
      Carleton: ["carleton"],
      Ryerson: ["ryerson", "tmu"],
      Laurier: ["laurier", "wlu", "wilfred"],
      York: ["york"],
    };

    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_API_URL)
      const data = await response.json()
      return data
    }

    const queryClient = useQueryClient()

    const admissionsQuery = useQuery({
      queryKey: ["admissions"],
      queryFn: fetchData,
    })


  // LOCAL API:
  // http://localhost:3001/ApplicantData

  // fetch data from backend api end point
  useEffect(() => {
     (async() => {
      if( admissionsQuery.status === 'success' && admissionsQuery.data ){
       setListOfUsers(admissionsQuery.data)
      }
     })()
  
  }, [admissionsQuery.data]);

  console.log(listOfUsers)
    const filteredOnce: Object[] = useMemo(() => {
      const schoolCriteria = schools[dropSearch];
      return listOfUsers.filter((user) =>
        schoolCriteria.some((criteria) =>
          (user as User).School.toLowerCase().includes(criteria)
        )
      );
    }, [dropSearch, listOfUsers]);
    
  
  // filtered by user's dynamic search
  const filteredListOfUsers = useMemo(() => filteredOnce.filter(
    (user) =>
      (user).Program.toLowerCase().includes(search.toLowerCase().trim()) &&
      parseFloat(user.Average) <= 100
  ), [search, dropSearch, listOfUsers]);

  // calculate average for each program
  let sum = 0;
  let num = 0;

  // calculate the overall average for the program
  filteredListOfUsers.forEach((user: User) => {
    if (!isNaN(user.Average)) {
      sum += parseFloat(user.Average);
      num++;
    }
  });

  const avg = sum / num;

  return (
    <>
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
        {admissionsQuery.isLoading && <p>Loading data...</p>}
        <div className="cards">
          {filteredListOfUsers.length < 1 && search !== "" ? (
            <h3>No results found for {search} </h3>
          ) : (
            filteredListOfUsers.map((user, index) => (
              <Applicant key={index} Program={(user as User).Program}  School={(user as User).School} Average={(user as User).Average}/>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ApplicantsData;
