import { Route,Routes,BrowserRouter } from "react-router-dom"
import { useState } from "react"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
function Add() {
  const [users, setUsers] = useState([
    {
      username: "suriya",
      passward: "123"
    },
    {
      username: "abc",
      passward: "123"
    }
  ])
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setUsers={setUsers}></Login>}></Route>
        <Route path='/signup' element={<Signup users={users} setUsers={setUsers}></Signup>}></Route>
        <Route path='/landing' element={<Landing ></Landing>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}
export default Add
