import React,{useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext } from 'react/cjs/react.development';
import { StudentContext } from './StudentContext';
import { useNavigate } from "react-router-dom";


function AddStudent() {
    const Navigate =useNavigate()
    const [students,setStudents] = useContext(StudentContext)
    const [dataa, setdataa] = useState({ name: "",age: "",course: "",batch: "" })


    const handleInput = (e) => {
      setdataa({...dataa,[e.target.name]:e.target.value})
      console.log(e.target.value)

  }
    const HandleSubmit=()=>{
  
        let getLastStdId= ((students.length)+1);
        const storeRecord = {...dataa,id:getLastStdId.toString()}
console.log(storeRecord);
        setStudents([...students,storeRecord])

        Navigate('/student')
    }
    return (
        <>
      <div className="editBox">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m:1 , width: "77ch" },
          }}
          noValidate
          autoComplete="off" >
          
              <div className="editContainer" >
                  <div > <TextField required className="inputText" value={dataa.name} id="name" name="name" onChange={handleInput} label="Name" color="primary" variant="outlined" /></div>
                  <div > <TextField required className="inputText" value={dataa.age} id="age" name="age" onChange={handleInput} label="Age" color="primary" variant="outlined" /></div>
                  <div > <TextField required className="inputText" value={dataa.course} id="course" name="course" onChange={handleInput} label="Course" color="primary" variant="outlined" /></div>
                  <div > <TextField required className="inputText" value={dataa.batch} id="batch" name="batch" onChange={handleInput} label="Batch" color="primary" variant="outlined" /></div>
              </div>    
           
        </Box>
        <button className="EditBtn" onClick={HandleSubmit}>Add Student</button>
      </div>
    </>
    )
}

export default AddStudent
