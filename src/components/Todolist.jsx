import AddTodolist from "./Addtodolist";

function Todolist(props) {
    const activityarr=props.activityarr;
    const setactivityarr=props.setactivityarr;
    return (
        <div>
            <h1 className="text-2xl font-medium" >Today's Activity</h1>
           {activityarr.length===0?<p>You haven't add anying yet!</p>:""}
            {
                activityarr.map(function(item,index){
                return <AddTodolist key={index} item={item.activity} index={index} activityarr={activityarr} setactivityarr={setactivityarr} id={item.id}></AddTodolist>
                })
               
            }
            
        </div>
    )
}
export default Todolist