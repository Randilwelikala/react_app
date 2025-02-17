import Student from "../components/Student";


const StudentCard = ({name,age,homeTown}) => {
    return(
        <div className="st-card">
            <img src="https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png" 
            alt="Student Image" 
            className="student-image"/>
            <Student name={name} age={age} homeTown={homeTown}/>

        </div>
    )
};
export default StudentCard; 