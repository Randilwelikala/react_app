import React, {useState } from "react";
import logo from './logo.svg';
import './App.css';
import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [text,setText]= useState(10);

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
      <StudentCard name="Amal" age={20} homeTown="Gampaha"/>
      <StudentCard name="saman" age={20} homeTown="Gampaha"/>
      <StudentCard name="Amal" age={20} homeTown="Gampaha"/>
      
      
    </div>
  );
}

export default App;
