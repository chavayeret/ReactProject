import { observer } from "mobx-react";
import { useState } from "react";
import { Button } from "@mui/material";
import dataStore from "../../data/dataStore";
import AddMeeting from "./AddMeeting";
import "./MeetingList.css";
import "../../index.css";

const Meeting = (observer(() => {
  const [addM, setaddM] = useState(false)
  const meet = dataStore.meetings;

  const meetcolor=(dateTime)=>{
    let color;
    const today = new Date();
    const meetdate=new Date(dateTime)
    if(today.getYear()===meetdate.getYear() ){
      if(today.getMonth()===meetdate.getMonth()){
        if (today.getDay()===meetdate.getDay()){
          color= "red";  
        }
        else{
          if(today.getDate()>meetdate.getDate()){
            color= "black";
          }
          else{
            if(today.getDate()+7>meetdate.getDate()){
              color= "orange";
            }
            else{
              color= "green";
            }
          }
        }
      }
      else{
        if(today.getMonth()<meetdate.getMonth()){
          if(meetdate.getMonth()-today.getMonth()==1 && (today.getDate()+7)%30>=meetdate.getDate()){
            color="orange";
          }
          else{
            color= "green";
          }
        }
        else{
          color= "black";
        }
      }
    }
    else{
      if(today.getYear()<meetdate.getYear() ){
        color= "green"
      }
      else{
       color= "black"
      }
    }
    return color
  }
  
  return (
    <>
      {dataStore.isLogin ?
       
        <div className="Meet"> 
          {meet.map((meet, i) => {return <div className = {meetcolor(meet.dateTime)} key={i}>
              <h3>{i+1}</h3>
              <h3>נקבעה פגישה בשפת {meet.serviceType}</h3>
              <h3>בתאריך {new Date(meet.dateTime).getDate()}/{new Date(meet.dateTime).getMonth()+1}/{new Date(meet.dateTime).getFullYear()} </h3>
              <h3>בשעה{new Date(meet.dateTime).getHours()}:{new Date(meet.dateTime).getMinutes()}</h3>
              <h3>עם {meet.clientName}</h3>
              <h3>{meet.clientPhone}</h3>
              <h3>{meet.clientEmail}</h3>
            </div>
          })}
        </div>
        :
        <div>
          {addM ? <AddMeeting onaddM={setaddM} /> : <Button onClick={() => { setaddM(true) }}>לקביעת פגישה</Button>}
        </div>
      }
    </>
  )
}))
export default Meeting
