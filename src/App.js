import React, {useState } from "react";
import logo from './logo.svg';
import './App.css';
import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [text,setText]= useState("k");

  const studentList = [
    {name:"Amal",age:20,town:"Ampara"},
    {name:"Kamal",age:25,town:"Colombo"},
    {name:"Sandipa",age:18,town:"Kandy"},
  ];

  const searchStudents = studentList.filter((student) => {
    return student.name.toLowerCase().includes(text.toLowerCase());
  });  

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
      <SearchBar onSearch={searchChange} searchText={text}/>
      <div>
        <p id='sample-text'>{text}</p>
        <p id='sample-text'></p>
      </div>
      {searchStudents.map((student,index)=>{
        return(
          <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          homeTown={student.town}
          />
        )
      })}
      
      
      
    </div>
  );
}

export default App;
