import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import Activitycontainer from "../components/Activitycontainer";

function Landing(){
    const data=useLocation()
    return(<><div className="bg-black p-16">
        <div className="bg-yellow-50 p-10 border rounded-md">
            <Header name={data.state.users}></Header>
          <div className="flex gap-7 justify-between my-2 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
            <Card bgcolor={"#FC6662"} title={"December"} subtitle={"16:12:00"}></Card>
            <Card bgcolor={"#FCA203"} title={"Built Using"} subtitle={"React"}></Card>
          </div>
          <div>
              <Activitycontainer/>
            </div>
        </div>
      </div></>)

}
export default Landing