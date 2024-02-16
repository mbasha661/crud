import Sidebar from "./components/Sidebar";
import Dashbord from "./components/Dashbord";
import Adduser from "./components/Adduser";
import Profile from "./components/profile";
import Pending from "./components/Pending";
import Task from "./components/task";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Profiledata from "./components/Profiledata";
import RestPass from "./components/RestPass";
import { useState } from "react";

function App() {
  let [users,setUsers]=useState([
    {
    name:"basha",
    email:"basha@gmail.com",
    mobile:"9191919555",
    dob:"12/12/2002"
  },
  {
    name:"raj",
    email:"basha@gmail.com",
    mobile:"9191919000",
    dob:"11/09/2000"
  },
  {
    name:"mani",
    email:"basha@gmail.com",
    mobile:"9191919129",
    dob:"03/01/2000"
  },
  {
    name:"bala",
    email:"basha@gmail.com",
    mobile:"9191919111",
    dob:"27/12/2000"
  }
])
  return <>
  <BrowserRouter>
    <div id="wrapper">
    <Sidebar/>
<Routes>
<Route path="/dashbord" element={<Dashbord users={users} setUsers={setUsers}/>}/>
     <Route path="/add-user" element={<Adduser users={users} setUsers={setUsers}/>}/>
          <Route path="/edit-user/:id" element={<Adduser users={users} setUsers={setUsers}/>}/><Route path="/profile" element={< Profile/>}>
  <Route path="details" element={<Profiledata/>}/>
  <Route path="reset-password" element={<RestPass/>}/>
</Route>
<Route path="/Pending" element={<Pending/>}/>
<Route path="/task" element={<Task/>}/>
<Route path="*" element={<Navigate to="dashbord"/>}/>
</Routes>
    
    </div>
    </BrowserRouter>

   


  </>
}

export default App;
