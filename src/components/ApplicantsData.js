import {useState, useEffect} from 'react'
import Axios from 'axios'
import './ApplicantsData.css'
import Applicant from './Applicant'


function ApplicantsData() {

  const [listOfUsers, setListOfUsers] = useState([])
  const [search, setSearch] = useState('')
  const [dropSearch, setDropSearch] = useState('UofT')

  // http://localhost:3001/ApplicantData

  useEffect(() => {
    Axios.get(`https://projectou.herokuapp.com/applicantData`)
    .then((res) => setListOfUsers(res.data))
  })


  let filteredOnce = listOfUsers

  if(dropSearch === 'UofT'){
    filteredOnce = listOfUsers.filter((user) => user.School.toLowerCase().includes(['toronto']) ||user.School.toLowerCase().includes(['uoft']) )
  }
  if(dropSearch === 'Waterloo'){
    filteredOnce = listOfUsers.filter((user) => user.School.toLowerCase().includes(['waterloo']) ||user.School.toLowerCase().includes(['uw']) )
  }

  if(dropSearch === 'McMaster'){
    filteredOnce = listOfUsers.filter((user) => user.School.toLowerCase().includes(['mcmaster']) || user.School.toLowerCase().includes(['mac']))
  }
 else if(dropSearch === 'Queen\'s'){
    filteredOnce = listOfUsers.filter((user) => user.School.toLowerCase().includes(['queen']))
  }
  else if(dropSearch === 'UOttawa'){
    filteredOnce = listOfUsers.filter((user) => user.School.toLowerCase().includes(['ottawa']))

  }
  else if(dropSearch==='Carleton'){
    filteredOnce = listOfUsers.filter((user) => user.School.toLowerCase().includes(['carleton']))

  }
  else if(dropSearch==='Ryerson'){
    filteredOnce = listOfUsers.filter((user) => user.School.toLowerCase().includes(['ryerson']) || user.School.toLowerCase().includes(['tmu']))

  }
  else if(dropSearch==='Laurier'){
    filteredOnce = listOfUsers.filter((user) => user.School.toLowerCase().includes(['laurier']) || user.School.toLowerCase().includes(['wlu']))
  }
  else if(dropSearch==='York'){
    filteredOnce = listOfUsers.filter((user) => user.School.toLowerCase().includes(['york']))

  }


  const filteredListOfUsers = filteredOnce.filter((user) => user.Program.toLowerCase().includes(search.toLowerCase()) && parseFloat(user.Average) <= 100)

    let sum = 0;
    let num = 0;

    filteredListOfUsers.forEach((user) => {
    if(!isNaN(parseFloat(user.Average))){
      sum += parseFloat(user.Average)
      num++;
      
    }})

    const avg = sum/num;

  return (
    <>
 <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className="container">
    <h1 id="data-header">2021-2022 Ontario Applicants Data</h1>
    <div className="search-container" >
    <input type="text" id="search-bar" placeholder="Find a program..." onChange={(e) => setSearch(e.target.value)}></input> 
    <div className="uni-select"> 
     <select onChange={(e) => setDropSearch(e.target.value)}>
      <option value="Select" disabled>University:</option>
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
  <i class="arrow down"></i></div>
    </div>
    <div className="display-avg">
    <h4>Average:&nbsp;</h4> <h4 id="avg"> {!isNaN(avg)? Math.round(avg * 100) / 100: ''}</h4>
    </div>
    <h6>Count: {!isNaN(avg)? num: ''}</h6>
    <div className="cards">
    {filteredListOfUsers.length < 1 && search !== '' ? <h3>No results found for {search} </h3> : filteredListOfUsers.map((user) => <Applicant applicantInfo={user}/>)}
    </div>
    </div>
    </>
  )
}

export default ApplicantsData