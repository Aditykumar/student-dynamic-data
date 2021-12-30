import React from "react";
import { useContext } from 'react/cjs/react.development';
import { StudentContext } from './StudentContext';
import StudentTable from "./StudentTable";
import { Link } from "react-router-dom";

function Student() {
  const [students,setStudents] = useContext(StudentContext)

  return (
    <div>
        <div className="headStudent">
            <div className="headingStudent">Student Details </div>
            <div><Link to="/addStudent"> <button className="btnStudent">Add Student</button></Link></div>
        </div>
        <div className="tableContainer">
            <div className="table"><StudentTable /> </div>
        </div>
    </div>
  );
}
export default Student;