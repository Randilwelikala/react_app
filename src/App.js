import React, {useState } from "react";
import logo from './logo.svg';
import './App.css';
import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [text,setText]= useState(10);

  const studentList = [
    {name:"Amal",age:"20",town:"Ampara"},
    {name:"Kamal",age:"25",town:"Colombo"},
    {name:"Sandipa",age:"18",town:"Kandy"},
  ]

  const searchChange = (event)=> {
    console.log(event.target.value);
    setText(event.target.value);
  };



//   let x=100;
  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   // const sampleText = document.getElementById('sample-text');
  //   // sampleText.innerHTML = event.target.value;
  //   x = event.target.value;
  //   console.log(x);
  //   setText(event.target.value)

  // };

  return (
    <div>
      <h1>My react App</h1>     
      <SearchBar onSearch={searchChange} />
      <div>
        <p id='sample-text'>{text}</p>
        <p id='sample-text'></p>
      </div>
      {studentList.map((student,index)=>{
        return(
          <StudentCard
          key={index}
          name={student.name}
          age={student.town}
          />
        )
      })}
      <
      
      
    </div>
  );
}

export default App;
