import { observer } from "mobx-react";
import dataStore from "../../data/dataStore";
import AddMeeting from "./AddMeeting";
import { useState } from "react";
import { Button } from "@mui/material";
import AdminHome from "../admin/AdminHome";

const Meeting = (observer(()=>{
  const [addM,setaddM] = useState(false)
   const meet = dataStore.getMeetings();
   console.log("meet", meet);
   //onMlist(true);

    return (
      <>
      {dataStore.isLogin?
      <div>
        <h3>פגישות</h3>
       <h3>{meet.serviceType}</h3>
       <h3>{meet.dateTime}</h3>
       <h3>{meet.clientName}</h3>
      </div>
      :
      <div>
       {addM ?<AddMeeting onaddM = {setaddM}/> :<Button onClick={()=>{setaddM(true)} }>לקביעת פגישה</Button>}
      </div>
      }
      </>
    )

  
}) )
  export default Meeting
  