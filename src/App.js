import logo from './logo.svg';
import './App.css';
//import ListEmployeeComponent from './components/ListEmployeeComponent';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';

function App() {
  return (
    <div className="App">
    {/* <ListEmployeeComponent /> */}
    
   <Router>
   <Navbar />
   <Routes>
     <Route exact path="/" element={<Home />}></Route>
     <Route exact path="/addUser" element={<AddUser />}></Route>
     <Route exact path="/editUser/:id" element={<EditUser />}></Route>


   </Routes>

   </Router>

    
    </div>
  );
}

export default App;
