import { useState } from "react"
import AddMeeting from "./AddMeeting";


function Meeting() {
  const [meeting,setMeeting]=useState({
    serviceType:"",
    dateTime:"",
    clientName:"",
    clientPhone:"",
    clientEmail:"",
  });

const handleSubmit = (event) => {
    event.preventDefault();
    AddMeeting()
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
                serviceType:
                <input type='text' name='serviceType' value={meeting.serviceType} onChange={handleChange} />
            </label>
            <br />
            <label>
                dateTime:
                <input type='text' name='email' value={meeting.dateTime} onChange={handleChange} />
            </label>
            <br />
            <label>
                clientName:
                <input type='text' name='clientName' value={meeting.clientName} onChange={handleChange} />
            </label>
            <br />
            <label>
                clientPhone:
                <input type='text' name='clientPhone' value={meeting.clientPhone} onChange={handleChange} />
            </label>
            <br />
            <label>
              clientEmail:
              <input type='email' name='clientEmail' value={meeting.clientEmail} onChange={handleChange} />
          </label>
          <br />
            <button type='submit'>שמור</button>
        </form>
    </>
  )
}
  
  export default Meeting
  