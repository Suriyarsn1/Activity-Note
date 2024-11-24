import {Link} from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props)
{   
    const navigate=useNavigate()
    const [enterUserName,setenterUserName]=useState()
    const [enterUserPass,setenterUserPass]=useState()
    const users=props.users;
    const setUsers=props.setUsers;
    
    function handleNewUsername(e)
    {
        setenterUserName(e.target.value)
    }
    function handleNewPassward(e)
    {
        setenterUserPass(e.target.value)
    }
  function addUser(){
     setUsers([...users,{username:enterUserName,passward:enterUserPass}])
     navigate('/')
  }
  console.log(users)
    return(<>
 <><div className="bg-black p-10" >
            <div className="bg-slate-50 p-10 border rounded-md flex flex-col flex-wrap ">
               <h1 className="text-3xl font-medium">Hey Hi</h1>
               <p>Sign up here :)</p> 
               <div className="flex flex-col gap-2 w-52 mt-2">
               <input onChange={handleNewUsername}
               className="p-1 border border-black bg-transparent rounded-md" placeholder="Enter user name" 
               type="text" />
                 <input onChange={handleNewPassward}
               className="p-1 border border-black bg-transparent rounded-md" placeholder="Enter Passward" 
               type="text" />
                  <input
               className="p-1 border border-black bg-transparent rounded-md" placeholder="Confirm Passward" 
               type="text" />
               <div>
               <button onClick={addUser} className="bg-[#8271DC] px-4 py-1 border rounded-md" >Sign Up</button>
               <p>Alredy have account? <Link to={'/'} className="underline">Login</Link>
               </p>
               </div>
               </div>
            </div>
        </div>
        </>
    </>)
}
export default Signup