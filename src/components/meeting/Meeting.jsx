import { observer } from "mobx-react";
import dataStore from "../../data/dataStore";
import AddMeeting from "./AddMeeting";
import { useState } from "react";
import { Button } from "@mui/material";
import "./MeetingList.css";
import "../../index.css"

const Meeting = (observer(()=>{
  const [addM,setaddM] = useState(false)
   const meet = dataStore.meetings;
   console.log("meet", meet);
   

    return (
      <>
      {dataStore.isLogin?
      <div>
      {meet.map((meet,i)=> {return<div className="meet" key={i}>
       <h3>{meet.serviceType}</h3>
       <h3>{meet.dateTime}</h3>
       <h3>{meet.clientName}</h3>
       </div>})}

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
  