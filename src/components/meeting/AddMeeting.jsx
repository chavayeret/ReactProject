import { useState } from "react"
import { observer } from "mobx-react";
import dataStore from "../../data/dataStore";
import service from "../service/Service";
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from "@mui/material";
import  dayjs  from "dayjs";



const AddMeeting =observer(({onaddM})=>{ 
  const [meeting,setMeeting]=useState(dataStore.getMeetings);

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(meeting)
    dataStore.addMeeting(meeting);
    if(dataStore.meetings.status===200){
    onaddM(false);}
    console.log(meeting);
}

const handleChange = (event) => {
    const { name, value } = event.target;
    setMeeting({ ...meeting, [name]: value });
}
const handleChangeTime = (event) =>{
  const { name, value } = event.$d;
  setMeeting({...meeting, [name]: value});
}
const Select = ()=>{
  dataS.map((dataS,i)=> {return<div key={i}>{dataS.name}</div>})
}
   return (
    <>
   
        <form onSubmit={handleSubmit}>
            <label>
                <input type='text'  name='serviceType' value={meeting.serviceType}onClick={()=>{Select}} onChange={handleChange} placeholder= "השפה"/>
            </label>
            <br />
            <label>
                <input type='text' name='clientName' value={meeting.clientName} onChange={handleChange} placeholder= "שם"/>
            </label>
            <br />
            <label>
                <input type='text' name='clientPhone' value={meeting.clientPhone} onChange={handleChange}placeholder= "טלפון" />
            </label>
            <br />
            <label>
              <input type='email' name='clientEmail' value={meeting.clientEmail} onChange={handleChange} placeholder= "כתובת מייל"/>
          </label>
          <br />
         
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
           <DateTimePicker
               label="תאריך ושעה"
               viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
          }} name='dateTime' value={meeting.dateTime} onChange={handleChangeTime} 
             />
             </DemoContainer>
      </LocalizationProvider>
      <Button type='submit'>שמור</Button>
        </form>
    </>
  )
})
  
  export default AddMeeting
  