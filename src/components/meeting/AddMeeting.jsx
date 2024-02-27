import React,{ useState,useEffect } from "react";
import { observer } from "mobx-react";
import dataStore from "../../data/dataStore";
import service from "../service/Service";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { Alert, Button, } from "@mui/material";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';


const AddMeeting = observer(({ onaddM }) => {

  const [meeting, setMeeting] = useState(dataStore.meetings);

  const handleSubmit = (event) => {
    console.log("dataStore",dataStore.meetings)
    event.preventDefault();
    dataStore.addMeeting(meeting);
    if(dataStore.meetings){
      onaddM(false);
   } 
   else{
       onaddM(true);
   } 
   }
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeeting({ ...meeting, [name]: value });
  }
  const handleChangeTime = (event) => {
    const { dateTime, value } = event.$d;
    setMeeting({ ...meeting, dateTime: event });
  }
  
  return (
    <>

      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' name='serviceType'value= {meeting.serviceType}onChange={(e) => handleChange(e)} placeholder="השפה"  />
        </label>
        <br />
        <label>
          <input type='text' name='clientName' value={meeting.clientName} onChange={(e) => handleChange(e)} placeholder="שם" />
        </label>
        <br />
        <label>
          <input type='text' name='clientPhone' value={meeting.clientPhone} onChange={(e) => handleChange(e)} placeholder="טלפון" />
        </label>
        <br />
        <label>
          <input type='email' name='clientEmail' value={meeting.clientEmail} onChange={(e) => handleChange(e)} placeholder="כתובת מייל" />
        </label>
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="תאריך ושעה"
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }} name='dateTime' value={meeting.dateTime} onChange={(e) => handleChangeTime(e)}
            />
        </LocalizationProvider>
        <br />
        <Button type='submit'>שמור</Button>
      </form>
    </>
  )
})

export default AddMeeting
