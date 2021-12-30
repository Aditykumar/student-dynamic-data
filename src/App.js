import { StudentProvider } from './Components/StudentContext';

import Header from './Components/Header';
import Home from './Components/Home';
import Student from './Components/Student';
import ContactUs from './Components/ContactUs';
import AddStudent from './Components/AddStudent';
import Edit from './Components/Edit';
import './Components/Style.css';
import { BrowserRouter as Router, Routes, Route,useParam} from 'react-router-dom';

function App() {
  return (
    <div >
        <StudentProvider>
          <Router>
            <Header/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path='/student' element={<Student/>}/>
                <Route path='/edit/:studentId' element={<Edit/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/addStudent" element={<AddStudent/>}/>
              </Routes>
          </Router>
    </StudentProvider>
    </div>
  );
}

export default App;
