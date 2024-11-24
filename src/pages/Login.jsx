import { useState } from "react"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props)
{ 
    const navigate=useNavigate()
    const [enterUserName,setenterUserName]=useState("")
    const [enterUserPass,setenterUserPass]=useState("")
    const [regUser,setRegUser]=useState(true)
    var checkItem=false;
    const users=props.users;
   
    function handleuname(e)
    {
        setenterUserName(e.target.value)
    }
    function handleupassward(e)
    {
        setenterUserPass(e.target.value)
    }
    function handleduser()
    {
        users.forEach(function(item){
         if(enterUserName===item.username && enterUserPass===item.passward )
         {
            
            checkItem=true;
            setRegUser(true)
            navigate('/landing',{state:{users:enterUserName}})
        }
       })
       if(checkItem===false)
        {
          
            setRegUser(false)
        }

    }
    return(
        <><div className="bg-black p-10" >
            <div className="bg-slate-50 p-10 border rounded-md flex flex-col flex-wrap ">
               <h1 className="text-3xl font-medium">Hey Hi</h1>
               {regUser?<p>I help you manage your activity after you login :)</p>:<p className="text-red-500">Please SignUp First!!</p>}
               <div className="flex flex-col gap-2 w-52 mt-2">
               
                <input onChange={handleuname} 
               className="p-1 border border-black bg-transparent rounded-md" placeholder="Enter user name" 
               type="text" />
              
                 <input onChange={handleupassward}
               className="p-1 border border-black bg-transparent rounded-md" placeholder="Enter Passward" 
               type="text" />
              
               <div>
               <button onClick={handleduser} className="bg-[#8271DC] px-4 py-1 border rounded-md" >Login</button>
               <p>Dont't have account? <Link to={'/signup'} className="underline">Signup</Link>
               </p>
               </div>
               </div>
            </div>
        </div>
        </>
    )

}
export default Login 