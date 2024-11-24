import Addlist from "./Addlist"
import Todolist from "./Todolist"
import { useState } from "react"
function Activity() {
    const  [activityarr,setactivityarr]=useState([
        {
            id:1,
            activity:"go to school"
        },
        {
            id:2,
            activity:"hello"
        }
    
    ])
    return (

        <><div className="flex gap-3 flex-wrap">
            <Addlist  setactivityarr={setactivityarr} activityarr={activityarr}></Addlist>
            <div className="bg-[#8272DA] p-2 border rounded-md flex-grow">
                <Todolist setactivityarr={setactivityarr} activityarr={activityarr}></Todolist>
            </div>
        </div>
        </>
    )
}
export default Activity