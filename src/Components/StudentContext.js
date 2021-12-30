import React, { useState,createContext } from "react";


export const StudentContext = createContext();
export const StudentProvider = (props) => {


  const [students, setStudents] = useState([
        {
          id:"1",
          name : "John",
          age : 26,
          course : "MERN",
          batch : "October"
        },
        {
          id:"2",
          name : "Doe",
          age : 25,
          course : "MERN",
          batch : "November"
        },
        {
          id:"3",
          name : "Biden",
          age : 26,
          course : "MERN",
          batch : "September"
        },
        {
          id:"4",
          name : "Barar",
          age : 22,
          course : "Christ",
          batch : "September"
        },
        {
          id:"5",
          name : "Elent",
          age : 23,
          course : "MERN",
          batch : "October"
        }
    ])
  
    return (
      <StudentContext.Provider value={[students,setStudents]}>
             {props.children}
      </StudentContext.Provider>
       
    )
}