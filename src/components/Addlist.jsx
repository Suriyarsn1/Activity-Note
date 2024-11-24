import { useState } from "react";
function Addlist(props) {
    const activityarr = props.activityarr;
    const setactivityarr = props.setactivityarr;

    var [List, Setlist] = useState("")

    function handleChange(e) {
        Setlist(e.target.value)

    }
    function addActivity() {
        setactivityarr([...activityarr, { id: activityarr.length + 1, activity: List }])
        Setlist("")
    }
    return (
        <>     <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium">Manage Activity</h1>
            <div>
                <input onChange={handleChange} value={List} className="bg-transparent border border-black p-1 "></input>
                <button onClick={addActivity} className="bg-black text-white p-1">Add</button>
            </div>
        </div>
        </>
    )
}
export default Addlist