import { useState } from "react"
import { observer } from "mobx-react";
import dataStore from "../../data/dataStore";
import Service from "../service/Service";
//import DateTimePickerViewRenderers from "./date";
import {TextField} from '@mui/material';


const AddMeeting =observer(({onaddM})=>{ 
  const [meeting,setMeeting]=useState(dataStore.getMeetings);

const handleSubmit = (event) => {
    event.preventDefault();
    dataStore.addMeeting(meeting);
    onaddM(false);
    console.log(meeting);
}

const handleChange = (event) => {
    const { name, value } = event.target;
    setMeeting({ ...meeting, [name]: value });
}

   return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
                <input type='text'  name='serviceType' value={meeting.serviceType} onChange={handleChange} placeholder= "השפה"/>
            </label>
            <br />
            <label>
                <input type= 'TextField' name='dateTime' value={meeting.dateTime} onChange={handleChange} //onFocus={()=>{DateTimePickerViewRenderers()}} 
                 placeholder= "תאריך ושעה" />
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
            <button type='submit'>שמור</button>
        </form>
    </>
  )
})
  
  export default AddMeeting
  